import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TournamentService } from '@common/services/tournamentService';
import { MatchService } from '@common/services/matchService';
import { Tournament } from '@common/types/tournaments/tournament';
import { Match } from '@common/types/tournaments/match';
import { MetricsService } from '@common/services/metricsService';
import { SportMetric } from '@common/types/sports/sport-metric';
import { SportsSettingsService } from '@common/services/sportsSettingsService';
import { OrdinalNumberPipe } from '@common/pipes/ordinal-number-pipe';
import { Sport } from '@common/types/sports/sport';
import { SportsService } from '@common/services/sportsService';

@Component({
  selector: 'app-match',
  imports: [CommonModule, OrdinalNumberPipe],
  templateUrl: './match.component.html',
})
export class MatchComponent implements OnInit {
  tournament!: Tournament;
  match!: Match;
  metrics!: SportMetric[];
  sport!: Sport;
  periodName!: string | undefined;
  periodLength!: number | undefined;
  numberOfPeriods!: number | undefined;

  matchActive = false;
  minutes = 0;
  seconds = 0;
  posession: 'home' | 'away' = 'home';
  homeScore = 0;
  awayScore = 0;
  showEndPeriodButton = false;
  showEndMatchButton = false;
  periodNumber = 1;
  isBetweenPeriods = true;
  matchFinished = false;
  
  constructor(private route: ActivatedRoute,
              private tournamentService: TournamentService,
              private matchesService: MatchService,
              private metricsService: MetricsService,
              private sportsSettingsService: SportsSettingsService,
              private sportService: SportsService) {}

  ngOnInit(): void {
    const sportId = this.route.snapshot.paramMap.get('sportId');
    const tournamentId = this.route.snapshot.paramMap.get('tournamentId');
    const matchId = this.route.snapshot.paramMap.get('matchId');

    if (sportId && tournamentId && matchId) {
      this.tournamentService.getTournament(sportId, tournamentId).subscribe(tournament => this.tournament = tournament);
      this.matchesService.getMatch(sportId, tournamentId, matchId).subscribe(match => this.match = match);
      this.metricsService.getSportMetrics(sportId).subscribe(metrics => this.metrics = metrics);
      this.sportsSettingsService.getSportSettings(sportId).subscribe(settings => {
        this.periodName = settings.find(s => s.name == 'Period name')?.value;
        const periodLength = settings.find(s => s.name == 'Period length (m)')?.value;
        if (periodLength) {
          this.periodLength = parseInt(periodLength);
        }
        const numberOfPeriods = settings.find(s => s.name == 'Number of periods')?.value;
        if (numberOfPeriods) {
          this.numberOfPeriods = parseInt(numberOfPeriods);
        }
      });
      this.sportService.getSport(sportId).subscribe(sport => this.sport = sport);
    }
  }

  startPeriod() {
    this.matchActive = true;
    this.isBetweenPeriods = false;
    this.iterateTimer();
  }

  iterateTimer() {
    setTimeout(() => { 
      if (!this.matchActive) {
        return;
      }
      
      this.seconds += 1;

      if (this.seconds == 60) {
        this.minutes += 1;
        this.seconds = 0;
      }

      if (this.periodLength && this.minutes >= this.periodLength * this.periodNumber) {
        if (this.periodNumber == this.numberOfPeriods) {
          this.showEndMatchButton = true;
        }
        else {
          this.showEndPeriodButton = true;
        }
      }

      this.iterateTimer();
    }, 1000);
  }

  pad(value: number) {
    if (value < 10) {
      return '0' + value;
    }

    return value;
  }

  processMetric(metric: SportMetric) {
    if (metric.isScoreModifier) {
      if (this.posession == 'home') {
        this.homeScore += metric.scoreModifier;
      } else {
        this.awayScore += metric.scoreModifier;
      }
    }

    if (metric.isTurnover) {
      this.posession = this.posession == 'home' ? 'away' : 'home';
    }
  }

  endPeriod() {
    this.matchActive = false;
    this.minutes = this.periodLength ? this.periodLength * this.periodNumber : 0;
    this.seconds = 0;
    this.periodNumber += 1;
    this.showEndPeriodButton = false;
    this.isBetweenPeriods = true;
  }

  endMatch() {
    this.matchActive = false;
    this.minutes = this.periodLength ? this.periodLength * this.periodNumber : 0;
    this.seconds = 0;
    this.showEndMatchButton = false;
    this.showEndPeriodButton = false;
    this.matchFinished = true;
  }
}