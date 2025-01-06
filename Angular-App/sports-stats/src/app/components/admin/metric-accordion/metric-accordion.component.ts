import { transition, state, animate, style} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Metric } from '../../../types/admin/metric';

@Component({
  selector: 'app-metric-accordion',
  imports: [CommonModule],
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
