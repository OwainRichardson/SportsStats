import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SportsService } from '../../../../shared/services/sportsService';
import { Sport } from '../../../../shared/types/sports/sport';
import { Team } from '../../../../shared/types/teams/team';
import { TeamsService } from '../../../../shared/services/teamsService';

@Component({
  selector: 'app-sport-teams',
  imports: [CommonModule, RouterLink],
  templateUrl: './sport-teams.component.html'
})
export class SportTeamsComponent implements OnInit{
  sportId!: string;
  sport!: Sport;
  teams: Team[] = [];

  constructor(private route: ActivatedRoute, 
                private sportsService: SportsService,
                private teamsService: TeamsService) {}

    ngOnInit(): void {
    const sportId = this.route.snapshot.paramMap.get('sportId');
    if (sportId) {
      this.sportId = sportId;

      this.sportsService.getSport(sportId).subscribe(sport => {
        this.sport = sport;
      });

      this.teamsService.getTeams(sportId).subscribe(teams => {
        this.teams = teams;
      })
    }
  }
}
