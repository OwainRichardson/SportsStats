import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sport } from '../../types/sports/sport';
import { SportsService } from '../../services/sports.service';
import { CommonModule } from '@angular/common';
import { Tournament } from '../../types/sports/Tournament';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-sport',
  imports: [CommonModule, CardComponent],
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.less'
})
export class SportComponent {
  sport: Sport;
  tournaments: Tournament[];
  loading = true;
  
  constructor(private route: ActivatedRoute, private sportService: SportsService) {
    route.paramMap.subscribe(params => {
      const sportId = String(params.get('sportId'));

      sportService.getSportById(sportId).subscribe(sport => {
          this.sport = sport
      });

      sportService.getTournamentsBySportId(sportId).subscribe(tournaments => {
        this.tournaments = tournaments;
      });
    });

    this.loading = this.tournaments && this.sport ? true : false;
  }
}
