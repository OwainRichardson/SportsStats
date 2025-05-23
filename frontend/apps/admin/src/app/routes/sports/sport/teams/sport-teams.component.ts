import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Sport } from '@common/types/sports/sport';
import { Team } from '@common/types/teams/team';
import { SportsService } from '@common/services/sportsService';
import { TeamsService } from '@common/services/teamsService';

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
