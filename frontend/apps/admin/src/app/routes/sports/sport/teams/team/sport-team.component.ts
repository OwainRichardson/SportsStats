import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sport } from '../../../../../shared/types/sports/sport';
import { SportsService } from '../../../../../shared/services/sportsService';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TeamsService } from '../../../../../shared/services/teamsService';
import { Team } from '../../../../../shared/types/teams/team';

@Component({
  selector: 'app-sport-team',
  imports: [CommonModule, RouterLink],
  templateUrl: './sport-team.component.html'
})
export class SportTeamComponent implements OnInit {
  sport!: Sport;
  team!: Team;

  constructor(private sportsService: SportsService, 
              private route: ActivatedRoute,
              private teamService: TeamsService,
              private router: Router)
  {

  }

  ngOnInit(): void {
      const sportId = this.route.snapshot.paramMap.get('sportId');
      const teamId = this.route.snapshot.paramMap.get('teamId');
      if (sportId && teamId) {
        this.sportsService.getSport(sportId).subscribe(sport => {
          this.sport = sport;
        });

        this.teamService.getTeam(sportId, teamId).subscribe(team => {
          this.team = team;
        });
    }
  }

  updateTeam() {
    const teamNameInput = document.getElementById('team-name') as HTMLInputElement;
    const teamLogoInput = document.getElementById('team-logo') as HTMLInputElement;
    const primaryColourInput = document.getElementById('team-primary-colour') as HTMLInputElement;
    const secondaryColourInput = document.getElementById('team-secondary-colour') as HTMLInputElement;

    this.teamService.updateTeam(this.sport.id, {
      id: this.team.id,
      name: teamNameInput.value,
      logoUrl: teamLogoInput.value,
      primaryColour: primaryColourInput.value,
      secondaryColour: secondaryColourInput.value
    }).subscribe(() => {
      this.router.navigate([`/sports/${this.sport.id}/teams`]);
    })
  }
}