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
import { TournamentSettingsService } from '@common/services/tournamentSettingsService';
import { OrdinalNumberPipe } from '@common/pipes/ordinal-number-pipe';
import { Sport } from '@common/types/sports/sport';
import { SportsService } from '@common/services/sportsService';
import { PadNumberPipe } from '@common/pipes/pad-number-pipe';
import { SportSetting } from '@common/types/sports/sport-setting';

@Component({
  selector: 'app-match',
  imports: [CommonModule, OrdinalNumberPipe, PadNumberPipe],
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
              private sportService: SportsService,
              private tournamentSettingsService: TournamentSettingsService) {}

  ngOnInit(): void {
    const sportId = this.route.snapshot.paramMap.get('sportId');
    const tournamentId = this.route.snapshot.paramMap.get('tournamentId');
    const matchId = this.route.snapshot.paramMap.get('matchId');

    if (sportId && tournamentId && matchId) {
      this.tournamentService.getTournament(sportId, tournamentId).subscribe(tournament => this.tournament = tournament);
      this.matchesService.getMatch(sportId, tournamentId, matchId).subscribe(match => this.match = match);
      this.metricsService.getSportMetrics(sportId).subscribe(metrics => this.metrics = metrics);
      this.getMatchSettings(sportId, tournamentId);
      this.sportService.getSport(sportId).subscribe(sport => this.sport = sport);
    }
  }

  private getMatchSettings(sportId: string, tournamentId: string) {
    let sportSettings: SportSetting[] = [];
    let tournamentSettings: SportSetting[] = [];
    
    this.sportsSettingsService.getSportSettings(sportId).subscribe(settings => {
      sportSettings = settings;

      this.tournamentSettingsService.getTournamentSettings(sportId, tournamentId).subscribe(settings => {
        tournamentSettings = settings;

        const periodNameSetting = sportSettings.find(s => s.name == 'Period name');
        if (tournamentSettings.find(s => s.sportSettingId == periodNameSetting?.id)) {
          this.periodName = tournamentSettings.find(s => s.sportSettingId == periodNameSetting?.id)?.value;
        } else {
          this.periodName = sportSettings.find(s => s.name == 'Period name')?.value;
        }

        const periodLengthSetting = sportSettings.find(s => s.name == 'Period length (m)');
        if (tournamentSettings.find(s => s.sportSettingId == periodLengthSetting?.id)) {
          this.periodLength = parseInt(tournamentSettings.find(s => s.sportSettingId == periodLengthSetting?.id)?.value ?? '0');
        } else {
          this.periodLength = parseInt(sportSettings.find(s => s.name == 'Period length (m)')?.value ?? '0');
        }

        const numberOfPeriodsSetting = sportSettings.find(s => s.name == 'Number of periods');
        if (tournamentSettings.find(s => s.sportSettingId == numberOfPeriodsSetting?.id)) {
          this.numberOfPeriods = parseInt(tournamentSettings.find(s => s.sportSettingId == numberOfPeriodsSetting?.id)?.value ?? '0');
        } else {
          this.numberOfPeriods = parseInt(sportSettings.find(s => s.name == 'Number of periods')?.value ?? '0');
        }
      });
    });
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

  processMetric(metric: SportMetric) {
    if (!this.match.homeTeam || !this.match.awayTeam) {
      return;
    }

    this.matchesService.addMatchEvent(this.sport.id,
                                        this.tournament.id,
                                        this.match.id,
                                        {
                                          metricId: metric.id,
                                          teamId: this.posession === 'home' ? this.match.homeTeam.id : this.match.awayTeam.id,
                                          timestamp: this.calculateTimestamp()
                                        }).subscribe();

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

  calculateTimestamp(): number {
    return this.seconds + (this.minutes * 60);
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

    this.matchesService.completeMatch(this.sport.id, this.tournament.id, this.match.id).subscribe();
  }
}