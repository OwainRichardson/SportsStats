import { Component } from '@angular/core';
import { SportsService } from '../../../services/sports.service';
import { Sport } from '../../../types/sports/sport';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../../components/global/card/card.component";

@Component({
  selector: 'app-sports',
  imports: [CommonModule, CardComponent],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.less'
})
export class SportsComponent {

  sports: Sport[] = [];
  constructor(private sportsService: SportsService) {
    this.sportsService.getSports().subscribe(sports => this.sports = sports);
  }
}
