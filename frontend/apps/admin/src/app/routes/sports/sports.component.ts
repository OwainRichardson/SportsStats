import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsServce } from '../../shared/services/sportsService';
import { Sport } from '../../shared/types/sports/sport';

@Component({
  selector: 'app-sports',
  imports: [CommonModule],
  templateUrl: './sports.component.html',
})
export class SportsComponent {
  sports: Sport[] = [];
  constructor(private sportsService: SportsServce) {
    this.sportsService.getSports().subscribe(sports => {
      this.sports = sports;
    });
  }
}
