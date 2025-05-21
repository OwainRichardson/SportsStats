import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SportsService } from '@common/services/sportsService';
import { Sport } from '@common/types/sports/sport';
import { Tournament } from '@common/types/tournaments/tournament';
import { TournamentService } from '@common/services/tournamentService';

@Component({
  selector: 'app-sport-tournaments',
  imports: [CommonModule, RouterLink],
  templateUrl: './sport-tournaments.component.html'
})
export class SportTournamentsComponent implements OnInit {
  sportId!: string;
  sport!: Sport;
  futureTournaments!: Tournament[];
  pastTournaments!: Tournament[];

  constructor(private route: ActivatedRoute,
                private sportsService: SportsService,
                private tournamentService: TournamentService) {}

  ngOnInit(): void {
    const sportId = this.route.snapshot.paramMap.get('sportId');
    if (sportId) {
      this.sportId = sportId;

      this.sportsService.getSport(sportId).subscribe(sport => {
        this.sport = sport;
      });

      this.tournamentService.getFutureTournaments(sportId).subscribe(tournaments => {
        this.futureTournaments = tournaments;
      });
      this.tournamentService.getPastTournaments(sportId).subscribe(tournaments => {
        this.pastTournaments = tournaments;
      });
    }
  }
}
