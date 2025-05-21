import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tournament } from '@common/types/tournaments/tournament';
import { Sport } from '@common/types/sports/sport';
import { SportsService } from '@common/services/sportsService';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TournamentService } from '@common/services/tournamentService';
import { Match } from '@common/types/tournaments/match';
import { MatchService } from '@common/services/matchService';

@Component({
  selector: 'app-tournament',
  imports: [CommonModule, RouterLink],
  templateUrl: './tournament.component.html'
})
export class TournamentComponent implements OnInit {
  sport!: Sport;
  tournament!: Tournament;
  matches!: Match[];
  
  constructor(private sportsService: SportsService, 
              private route: ActivatedRoute,
              private tournamentService: TournamentService,
              private matchesService: MatchService) {}

  ngOnInit(): void {
    const sportId = this.route.snapshot.paramMap.get('sportId');
    const tournamentId = this.route.snapshot.paramMap.get('tournamentId');

    if (sportId && tournamentId) {
      this.sportsService.getSport(sportId).subscribe(sport => this.sport = sport);
      this.tournamentService.getTournament(sportId, tournamentId).subscribe(tournament => this.tournament = tournament);
      this.matchesService.getMatches(sportId, tournamentId).subscribe(matches => this.matches = matches);
    }
  }
}