import { Component } from '@angular/core';
import { SportsService } from '../../../services/sports.service';
import { Sport } from '../../../types/sports/sport';
import { CardComponent } from '../../../components/global/card/card.component';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../types/admin/breadcrumb';
import { AdminBreadcrumbComponent } from "../../../components/admin/admin-breadcrumb/admin-breadcrumb.component";

@Component({
  selector: 'app-admin-sports',
  imports: [CardComponent, CommonModule, AdminBreadcrumbComponent],
  templateUrl: './admin-sports.component.html',
  styleUrl: './admin-sports.component.less'
})
export class AdminSportsComponent {
  sports: Sport[] = [];
  breadcrumbs: Breadcrumb[] = [
    {link: '/admin', label: 'Admin home' }
  ];

  constructor(private sportsService: SportsService) {
    this.sportsService.getSports().subscribe(sports => this.sports = sports);
  }
}
