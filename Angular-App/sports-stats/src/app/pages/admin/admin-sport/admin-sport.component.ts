import { CommonModule } from '@angular/common';
import { Component, ViewContainerRef, Inject, ElementRef } from '@angular/core';
import { Sport } from '../../../types/sports/sport';
import { SportsService } from '../../../services/sports.service';
import { ActivatedRoute } from '@angular/router';
import { AdminBreadcrumbComponent } from '../../../components/admin/admin-breadcrumb/admin-breadcrumb.component';
import { Breadcrumb } from '../../../types/admin/breadcrumb';
import { SportSetting } from '../../../types/sports/sportSetting';
import { AdminFormGroupComponent } from '../../../components/admin/admin-form-group/admin-form-group.component';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-admin-sport',
  imports: [CommonModule, AdminBreadcrumbComponent, AdminFormGroupComponent],
  templateUrl: './admin-sport.component.html',
  styleUrl: './admin-sport.component.less'
})
export class AdminSportComponent {
  sport: Sport = { name: '', id: '', icon: '' };
  settings: SportSetting[];
  self: AdminSportComponent;
  viewContainerRef: ViewContainerRef;

  breadcrumbs: Breadcrumb[] = [
    {link: '/admin', label: 'Admin home' },
    {link: '/admin/sports', label: 'Sports'}
  ];
  
  constructor(private route: ActivatedRoute, private sportService: SportsService, private toastService: ToastService, private elRef: ElementRef) {
    // this.viewContainerRef = viewContainerRef;
    
    route.paramMap.subscribe(params => {
      const sportId = String(params.get('sportId'));
      this.self = this;

      sportService.getSportById(sportId).subscribe(sport => {
          this.sport = sport
      });

      sportService.getSportSettingsById(sportId).subscribe(settings => {
        this.settings = settings
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
