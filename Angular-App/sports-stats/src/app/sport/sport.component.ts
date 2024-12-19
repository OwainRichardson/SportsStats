import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Sport } from '../types/sports/sport';
import { SportsService } from '../services/sports.service';
import { CommonModule } from '@angular/common';

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

      const sports = sportService.getSportById(sportId).subscribe(sport => {
          this.sport = sport
          this.loading = false;
      });
      
      return sports;
    });
  }
}
