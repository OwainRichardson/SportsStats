import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sport } from '../../../types/sports/sport';
import { SportsService } from '../../../services/sports.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../components/global/card/card.component';

@Component({
  selector: 'app-sport',
  imports: [CommonModule],
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.less'
})
export class SportComponent {
  sport: Sport;
  loading = true;
  
  constructor(private route: ActivatedRoute, private sportService: SportsService) {
    route.paramMap.subscribe(params => {
      const sportId = String(params.get('sportId'));

      sportService.getSportById(sportId).subscribe(sport => {
          this.sport = sport
      });
    });

    this.loading = this.sport ? true : false;
  }
}
