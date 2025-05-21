import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SportsService } from '@common/services/sportsService';
import { TournamentService } from '@common/services/tournamentService';
import { Sport } from '@common/types/sports/sport';
import { Tournament } from '@common/types/tournaments/tournament';
import { Match } from '@common/types/tournaments/match';
import { MatchService } from '@common/services/matchService';

@Component({
  selector: 'app-sport-tournament',
  imports: [CommonModule, RouterLink],
  templateUrl: './sport-tournament.component.html'
})
export class SportTournamentComponent implements OnInit {
  sportId!: string;
  sport!: Sport;
  tournament!: Tournament;
  matches!: Match[];

  constructor(private route: ActivatedRoute,
                private sportsService: SportsService,
                private tournamentService: TournamentService,
                private matchService: MatchService) {}

    ngOnInit(): void {
    const sportId = this.route.snapshot.paramMap.get('sportId');
    const tournamentId = this.route.snapshot.paramMap.get('tournamentId');
    if (sportId) {
      this.sportId = sportId;

      this.sportsService.getSport(sportId).subscribe(sport => {
        this.sport = sport;
      });

      if (tournamentId) {
        this.tournamentService.getTournament(sportId, tournamentId).subscribe(tournament => {
          this.tournament = tournament;
        });

        this.matchService.getMatches(sportId, tournamentId).subscribe(matches => {
          this.matches = matches;
        });
      }
    }
  }
}
