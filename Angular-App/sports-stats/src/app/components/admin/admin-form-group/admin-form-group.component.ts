import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-form-group',
  imports: [],
  templateUrl: './admin-form-group.component.html',
  styleUrl: './admin-form-group.component.less'
})
export class AdminFormGroupComponent {
  @Input() name: string;
  @Input() value: string;
}
