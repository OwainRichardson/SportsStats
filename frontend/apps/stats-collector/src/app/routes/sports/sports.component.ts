import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sport } from '@common/types/sports/sport';
import { SportsService } from '@common/services/sportsService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sports',
  imports: [CommonModule, RouterLink],
  templateUrl: './sports.component.html'
})
export class SportsComponent implements OnInit {
  sports!: Sport[];
  
  constructor(private sportsService: SportsService) {}

  ngOnInit(): void {
    this.sportsService.getSports().subscribe(sports => this.sports = sports);
  }
}
