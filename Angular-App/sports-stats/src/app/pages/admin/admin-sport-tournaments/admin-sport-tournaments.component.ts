import { Component } from '@angular/core';
import { AdminBreadcrumbComponent } from '../../../components/admin/admin-breadcrumb/admin-breadcrumb.component';
import { Breadcrumb } from '../../../types/admin/breadcrumb';
import { Sport } from '../../../types/sports/sport';
import { ActivatedRoute } from '@angular/router';
import { SportsService } from '../../../services/sports.service';
import { Tournament } from '../../../types/sports/tournament';
import { TournamentsService } from '../../../services/tournaments.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-sport-tournaments',
  imports: [AdminBreadcrumbComponent, CommonModule],
  templateUrl: './admin-sport-tournaments.component.html',
  styleUrl: './admin-sport-tournaments.component.less'
})
export class AdminSportTournamentsComponent {
  sport: Sport = { name: '', id: '', icon: '' };
  futureTournaments: Tournament[] = [];
  activeTournaments: Tournament[] = [];
  pastTournaments: Tournament[] = [];

  breadcrumbs: Breadcrumb[] = [
        {link: '/admin', label: 'Admin home' },
        {link: '/admin/sports', label: 'Sports'}
      ];

      constructor(private route: ActivatedRoute, 
                  private sportService: SportsService,
                  private tournamentsService: TournamentsService) {
        route.paramMap.subscribe(params => {
          const sportId = String(params.get('sportId'));
    
          sportService.getSportById(sportId).subscribe(sport => {
              this.sport = sport
              this.breadcrumbs.push({link: '/admin/sports/' + sportId, label: sport.name})
          });
          
          tournamentsService.getFutureTournamentsBySportId(sportId).subscribe(tournaments => {
            this.futureTournaments = tournaments
          })

          tournamentsService.getActiveTournamentsBySportId(sportId).subscribe(tournaments => {
            this.activeTournaments = tournaments
          })

          tournamentsService.getPastTournamentsBySportId(sportId).subscribe(tournaments => {
            this.pastTournaments = tournaments
          })
        });
      }
}
