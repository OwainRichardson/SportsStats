import { Component } from '@angular/core';
import { SportsService } from '../services/sports.service';
import { Sport } from '../types/sports/sport';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

  sports: Sport[] = [];
  constructor(private sportsService: SportsService) {
    this.sportsService.getSports().subscribe(sports => this.sports = sports);
  }
}
