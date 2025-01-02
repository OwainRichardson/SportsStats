import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sport } from '../../../types/sports/sport';
import { SportsService } from '../../../services/sports.service';
import { ActivatedRoute } from '@angular/router';
import { AdminBreadcrumbComponent } from '../../../components/admin/admin-breadcrumb/admin-breadcrumb.component';
import { Breadcrumb } from '../../../types/admin/breadcrumb';
import { SportSetting } from '../../../types/sports/sportSetting';
import { AdminFormGroupComponent } from '../../../components/admin/admin-form-group/admin-form-group.component';

@Component({
  selector: 'app-admin-sport',
  imports: [CommonModule, AdminBreadcrumbComponent, AdminFormGroupComponent],
  templateUrl: './admin-sport.component.html',
  styleUrl: './admin-sport.component.less'
})
export class AdminSportComponent {
  sport: Sport;
  settings: SportSetting[];

  breadcrumbs: Breadcrumb[] = [
    {link: '/admin', label: 'Admin home' },
    {link: '/admin/sports', label: 'Sports'}
  ];
  
  constructor(private route: ActivatedRoute, private sportService: SportsService) {
    route.paramMap.subscribe(params => {
      const sportId = String(params.get('sportId'));

      sportService.getSportById(sportId).subscribe(sport => {
          this.sport = sport
      });

      sportService.getSportSettingsById(sportId).subscribe(settings => {
        this.settings = settings
      })
    });
  }
}
