import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsService } from '../../../shared/services/sportsService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports-create',
  imports: [CommonModule],
  templateUrl: './sports-create.component.html'
})
export class SportsCreateComponent {
  constructor(private sportsService: SportsService, private router: Router) {}
  
  createSport() {
    const sportName = document.getElementById('sport-name') as HTMLInputElement;
    const sportIcon = document.getElementById('sport-icon') as HTMLInputElement;

    this.sportsService.createSport(sportName.value, sportIcon.value).subscribe(() => {
      this.router.navigate(['/sports']);
    });
  }
}
