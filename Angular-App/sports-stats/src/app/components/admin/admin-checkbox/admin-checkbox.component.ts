import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-checkbox',
  imports: [],
  templateUrl: './admin-checkbox.component.html',
  styleUrl: './admin-checkbox.component.less'
})
export class AdminCheckboxComponent {
  @Input() label: string;
}
