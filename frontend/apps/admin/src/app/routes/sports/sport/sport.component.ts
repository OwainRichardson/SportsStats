import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsServce } from '../../../shared/services/sportsService';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Sport } from '../../../shared/types/sports/sport';

@Component({
  selector: 'app-sport',
  imports: [CommonModule, RouterLink],
  templateUrl: './sport.component.html'
})
export class SportComponent implements OnInit {
  sport!: Sport;

  constructor(private sportsService: SportsServce, private route: ActivatedRoute)
  {

  }

  ngOnInit(): void {
      const sportId = this.route.snapshot.paramMap.get('sportId');
      if (sportId){
        this.sportsService.getSport(sportId).subscribe(sport => {
        this.sport = sport;
      });
    }
  }
}
