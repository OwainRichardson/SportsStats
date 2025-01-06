import { CommonModule } from '@angular/common';
import { Component, ViewContainerRef, ElementRef } from '@angular/core';
import { Sport } from '../../../types/sports/sport';
import { SportsService } from '../../../services/sports.service';
import { ActivatedRoute } from '@angular/router';
import { AdminBreadcrumbComponent } from '../../../components/admin/admin-breadcrumb/admin-breadcrumb.component';
import { Breadcrumb } from '../../../types/admin/breadcrumb';
import { SportSetting } from '../../../types/sports/sportSetting';
import { AdminFormGroupComponent } from '../../../components/admin/admin-form-group/admin-form-group.component';
import { ToastService } from '../../../services/toast.service';
import { MetricAccordionComponent } from '../../../components/admin/metric-accordion/metric-accordion.component';
import { Metric } from '../../../types/admin/metric';
import { MetricsService } from '../../../services/metrics.service';

@Component({
  selector: 'app-admin-sport',
  imports: [CommonModule, AdminBreadcrumbComponent, AdminFormGroupComponent, MetricAccordionComponent],
  templateUrl: './admin-sport.component.html',
  styleUrl: './admin-sport.component.less'
})
export class AdminSportComponent {
  sport: Sport = { name: '', id: '', icon: '' };
  settings: SportSetting[];
  self: AdminSportComponent;
  viewContainerRef: ViewContainerRef;
  metrics: Metric[];

  breadcrumbs: Breadcrumb[] = [
    {link: '/admin', label: 'Admin home' },
    {link: '/admin/sports', label: 'Sports'}
  ];
  
  constructor(private route: ActivatedRoute, 
                private sportService: SportsService, 
                private toastService: ToastService, 
                private elRef: ElementRef,
                private metricsService: MetricsService) {
    
    route.paramMap.subscribe(params => {
      const sportId = String(params.get('sportId'));
      this.self = this;

      sportService.getSportById(sportId).subscribe(sport => {
          this.sport = sport
      });

      sportService.getSportSettingsById(sportId).subscribe(settings => {
        this.settings = settings
      })

      metricsService.getMetrics(sportId).subscribe(metrics => {
        this.metrics = metrics
      })
    });
  }

  handleSave(id: string, name: string, sportId: string, value: string) {
    this.sportService.updateSportSetting(sportId, id, value)
            .subscribe({
              next: (res) => this.showToast(true, name, value),
              error: (err) => this.showToast(false, name, value)
            });
  }

  showToast(success: boolean, name: string, value: string) {
    const message = success ? 
                       `Successfully updated '${name}' to '${value}'`
                       : `There was an error whilst updating '${name}' to '${value}'`;
    

    this.toastService.addToast(success, message, this.elRef);
  }
}
