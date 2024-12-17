import { Component } from '@angular/core';
import { SportsService, Sport } from '../services/sports.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.less'
})
export class AdminComponent {

  cars = '';
  sports: Sport[];
  selectedSport: Sport;

constructor(private sportsService: SportsService){
  this.sportsService.getSports().subscribe(sports => {
    this.sports = sports;  
  });

  this.sportsService.getSportById("d8dd5a6b-3546-4d1f-a7c8-d85eac9e685c").subscribe(sport => {
    this.selectedSport = sport;  
  });
}

  title = 'Sports Stats Admin';
}
