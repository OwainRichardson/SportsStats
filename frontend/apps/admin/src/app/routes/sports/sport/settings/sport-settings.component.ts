import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SportsServce } from '../../../../shared/services/sportsService'; 
import { Sport } from '../../../../shared/types/sports/sport';

@Component({
  selector: 'app-sport-settings',
  imports: [CommonModule],
  templateUrl: './sport-settings.component.html',
})
export class SportSettingsComponent implements OnInit {
  sport!: Sport;

  constructor (private route: ActivatedRoute, private sportsService: SportsServce) {

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
