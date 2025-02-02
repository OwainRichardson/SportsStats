import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sport } from '../../../types/sports/sport';
import { SportsService } from '../../../services/sports.service';
import { ActivatedRoute } from '@angular/router';
import { AdminBreadcrumbComponent } from '../../../components/admin/admin-breadcrumb/admin-breadcrumb.component';
import { Breadcrumb } from '../../../types/admin/breadcrumb';
import { SportSetting } from '../../../types/sports/sportSetting';
import { Metric } from '../../../types/admin/metric';
import { CardComponent } from '../../../components/global/card/card.component';

@Component({
  selector: 'app-admin-sport',
  imports: [CommonModule, AdminBreadcrumbComponent, CardComponent],
  templateUrl: './admin-sport.component.html',
  styleUrl: './admin-sport.component.less'
})
export class AdminSportComponent {
  sport: Sport = { name: '', id: '', icon: '' };
  settings: SportSetting[];
  metrics: Metric[];

  breadcrumbs: Breadcrumb[] = [
    {link: '/admin', label: 'Admin home' },
    {link: '/admin/sports', label: 'Sports'}
  ];
  
  constructor(private route: ActivatedRoute, 
                private sportService: SportsService) {
    
    route.paramMap.subscribe(params => {
      const sportId = String(params.get('sportId'));
      
      sportService.getSportById(sportId).subscribe(sport => {
          this.sport = sport
      });
    });
  }
}
