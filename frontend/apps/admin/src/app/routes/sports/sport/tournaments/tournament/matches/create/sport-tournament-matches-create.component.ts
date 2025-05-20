import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Sport } from '../../../../../../../shared/types/sports/sport';
import { Tournament } from '../../../../../../../shared/types/tournaments/tournament';
import { SportsService } from '../../../../../../../shared/services/sportsService';
import { TournamentService } from '../../../../../../../shared/services/tournamentService';
import { Team } from '../../../../../../../shared/types/teams/team';
import { TeamsService } from '../../../../../../../shared/services/teamsService';
import { MatchService } from '../../../../../../../shared/services/matchService';

@Component({
  selector: 'app-sport-tournament-matches-create',
  imports: [CommonModule, RouterLink],
  templateUrl: './sport-tournament-matches-create.component.html'
})
export class SportTournamentMatchesCreateComponent implements OnInit {
  sportId!: string;
  sport!: Sport;
  tournament!: Tournament;
  teams!: Team[];

  constructor(private route: ActivatedRoute,
              private sportsService: SportsService,
              private tournamentService: TournamentService,
              private teamsService: TeamsService,
              private matchService: MatchService,
              private router: Router) {}
  
  ngOnInit(): void {
    const sportId = this.route.snapshot.paramMap.get('sportId');
    const tournamentId = this.route.snapshot.paramMap.get('tournamentId');
    if (sportId && tournamentId) {
      this.sportId = sportId;

      this.sportsService.getSport(sportId).subscribe(sport => {
        this.sport = sport;
      });

      this.tournamentService.getTournament(sportId, tournamentId).subscribe(tournament => {
        this.tournament = tournament;
      });

      this.teamsService.getTeams(sportId).subscribe(teams => {
        this.teams = teams;
      });
    }
  }

  createMatch() {
    const homeTeamInput = document.getElementById('home-team') as HTMLInputElement;
    const awayTeamInput = document.getElementById('away-team') as HTMLInputElement;
    const pitchInput = document.getElementById('pitch') as HTMLInputElement;
    const timeInput = document.getElementById('time') as HTMLInputElement;

    this.matchService.createMatch(this.sportId, this.tournament.id, {
      id: 'new',
      homeTeamId: homeTeamInput.value,
      awayTeamId: awayTeamInput.value,
      pitch: pitchInput.value,
      time: timeInput.value
    }).subscribe(() => {
      this.router.navigate([`/sports/${this.sport.id}/tournaments/${this.tournament.id}`]);
    })
  }
}
