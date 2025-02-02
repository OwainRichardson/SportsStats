import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { AdminBreadcrumbComponent } from '../../../components/admin/admin-breadcrumb/admin-breadcrumb.component';
import { AdminFormGroupComponent } from '../../../components/admin/admin-form-group/admin-form-group.component';
import { MetricAccordionComponent } from '../../../components/admin/metric-accordion/metric-accordion.component';
import { ActivatedRoute } from '@angular/router';
import { Metric } from '../../../types/admin/metric';
import { MetricsService } from '../../../services/metrics.service';
import { Sport } from '../../../types/sports/sport';
import { SportsService } from '../../../services/sports.service';
import { ToastService } from '../../../services/toast.service';
import { SportSetting } from '../../../types/sports/sportSetting';
import { Breadcrumb } from '../../../types/admin/breadcrumb';

@Component({
  selector: 'app-admin-sport-settings',
  imports: [CommonModule, AdminBreadcrumbComponent, AdminFormGroupComponent, MetricAccordionComponent],
  templateUrl: './admin-sport-settings.component.html',
  styleUrl: './admin-sport-settings.component.less'
})

export class AdminSportSettingsComponent {
    sport: Sport = { name: '', id: '', icon: '' };
    settings: SportSetting[];
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

      sportService.getSportById(sportId).subscribe(sport => {
          this.sport = sport
          this.breadcrumbs.push({link: '/admin/sports/' + sportId, label: sport.name})
      });

      sportService.getSportSettingsById(sportId).subscribe(settings => {
        this.settings = settings
      })

      metricsService.getMetrics(sportId).subscribe(metrics => {
        this.metrics = metrics
      })
    });
  }

  handleSaveSetting(id: string, name: string, sportId: string, value: string) {
    this.sportService.updateSportSetting(sportId, id, value)
            .subscribe({
              next: (res) => this.showToast(true, name, value),
              error: (err) => this.showToast(false, name, value)
            });
  }

  handleSaveMetric(id: string, name: string, sportId: string, value: string, metricPropertyName: string) {
  }

  showToast(success: boolean, name: string, value: string) {
    const message = success ? 
                       `Successfully updated '${name}' to '${value}'`
                       : `There was an error whilst updating '${name}' to '${value}'`;
    

    this.toastService.addToast(success, message, this.elRef);
  }
}
