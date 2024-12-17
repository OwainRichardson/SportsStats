import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Sport } from '../types/sports/sport';
import { SportsService } from '../services/sports.service';

@Component({
  selector: 'app-sport',
  imports: [],
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.less'
})
export class SportComponent {
  sportId: string;
  sport: Sport;

  constructor(private route: ActivatedRoute, private sportService: SportsService) {
    route.paramMap.subscribe(params => {
      this.sportId = String(params.get('sportId'));

      return sportService.getSportById(this.sportId).subscribe(sport => this.sport = sport);
    });
  }
}
