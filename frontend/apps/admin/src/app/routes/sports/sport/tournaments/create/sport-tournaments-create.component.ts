import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SportsService } from '../../../../../shared/services/sportsService';
import { Sport } from '../../../../../shared/types/sports/sport';
import { Tournament } from '../../../../../shared/types/tournaments/tournament';
import { TournamentService } from '../../../../../shared/services/tournamentService';

@Component({
  selector: 'app-sport-tournaments-create',
  imports: [CommonModule],
  templateUrl: './sport-tournaments-create.component.html'
})
export class SportTournamentsCreateComponent implements OnInit {
  sport!: Sport;

  constructor(private route: ActivatedRoute, 
              private sportsService: SportsService, 
              private router: Router,
              private tournamentService: TournamentService ) {
    
  }

  ngOnInit(): void {
    const sportId = this.route.snapshot.paramMap.get('sportId');
    if (sportId) {
      this.sportsService.getSport(sportId).subscribe(sport => {
        this.sport = sport;
      });
    }
  }

  createTournament() {
    const tournamentName = document.getElementById('tournament-name') as HTMLInputElement;
    const tournamentLocation = document.getElementById('tournament-location') as HTMLInputElement;
    const tournamentStartDate = document.getElementById('tournament-start-date') as HTMLInputElement;
    const tournamentEndDate = document.getElementById('tournament-end-date') as HTMLInputElement;

    const tournament = <Tournament>{
      name: tournamentName.value,
      location: tournamentLocation.value,
      startDate: tournamentStartDate.value,
      endDate: tournamentEndDate.value
    }

    this.tournamentService.createTournament(this.sport.id, tournament).subscribe(() => {
      this.router.navigate([`/sports/${this.sport.id}/tournaments`]);
    })
  }
}
