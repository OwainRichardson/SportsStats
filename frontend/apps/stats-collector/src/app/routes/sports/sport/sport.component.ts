import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sport } from '@common/types/sports/sport';
import { SportsService } from '@common/services/sportsService';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Tournament } from '@common/types/tournaments/tournament';
import { TournamentService } from '@common/services/tournamentService';

@Component({
  selector: 'app-sport',
  imports: [CommonModule, RouterLink],
  templateUrl: './sport.component.html'
})
export class SportComponent implements OnInit {
  sport!: Sport;
  pastTournaments!: Tournament[];
  
  constructor(private sportsService: SportsService, 
              private route: ActivatedRoute,
              private tournamentsService: TournamentService) {}

  ngOnInit(): void {
    const sportId = this.route.snapshot.paramMap.get('sportId');

    if (sportId) {
      this.sportsService.getSport(sportId).subscribe(sport => this.sport = sport);
      this.tournamentsService.getPastTournaments(sportId).subscribe(tournaments => this.pastTournaments = tournaments);
    }
  }
}