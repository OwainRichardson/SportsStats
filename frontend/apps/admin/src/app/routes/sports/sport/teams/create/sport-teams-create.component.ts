import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Sport } from '../../../../../shared/types/sports/sport';
import { SportsService } from '../../../../../shared/services/sportsService';
import { TeamsService } from '../../../../../shared/services/teamsService';

@Component({
  selector: 'app-sport-teams-create',
  imports: [CommonModule],
  templateUrl: './sport-teams-create.component.html'
})
export class SportTeamsCreateComponent implements OnInit {
  sport!: Sport;

  constructor(private route: ActivatedRoute, 
              private sportsService: SportsService, 
              private router: Router,
              private teamService: TeamsService) {}

  ngOnInit(): void {
    const sportId = this.route.snapshot.paramMap.get('sportId');
    if (sportId) {
      this.sportsService.getSport(sportId).subscribe(sport => {
        this.sport = sport;
      });
    }
  }

  createTeam() {
    const teamNameInput = document.getElementById('team-name') as HTMLInputElement;
    const teamLogoInput = document.getElementById('team-logo') as HTMLInputElement;

    this.teamService.createTeam(this.sport.id, {
      id: 'new',
      name: teamNameInput.value,
      logoUrl: teamLogoInput.value
    }).subscribe(() => {
      this.router.navigate([`/sports/${this.sport.id}/teams`]);
    })
  }
}