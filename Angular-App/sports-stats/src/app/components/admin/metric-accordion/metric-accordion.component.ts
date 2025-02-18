import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Metric } from '../../../types/admin/metric';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-metric-accordion',
  imports: [CommonModule, FormsModule],
  templateUrl: './metric-accordion.component.html',
  styleUrl: './metric-accordion.component.less'
})
export class MetricAccordionComponent {
  @Input() metric: Metric;

  open: boolean = false;

  openMetric() {
    this.open = !this.open;
  }
}
