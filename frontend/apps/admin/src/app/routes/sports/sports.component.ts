import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsService } from '../../shared/services/sportsService';
import { Sport } from '../../shared/types/sports/sport';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sports',
  imports: [CommonModule, RouterLink],
  templateUrl: './sports.component.html',
})
export class SportsComponent {
  sports: Sport[] = [];
  constructor(private sportsService: SportsService) {
    this.sportsService.getSports().subscribe(sports => {
      this.sports = sports;
    });
  }
}
