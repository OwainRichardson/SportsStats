import { Component, Input } from '@angular/core';
import { Breadcrumb } from '../../../types/admin/breadcrumb';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-breadcrumb',
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-breadcrumb.component.html',
  styleUrl: './admin-breadcrumb.component.less'
})
export class AdminBreadcrumbComponent {
  @Input() links: Breadcrumb[]
}
