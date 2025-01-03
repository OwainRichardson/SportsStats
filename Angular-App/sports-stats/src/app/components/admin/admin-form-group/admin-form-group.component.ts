import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-form-group',
  imports: [FormsModule],
  templateUrl: './admin-form-group.component.html',
  styleUrl: './admin-form-group.component.less'
})
export class AdminFormGroupComponent {
  @Input() name: string;
  @Input() value: string;
  @Input() id: string;
  @Input() sportId: string;
  @Output() onBlurEvent: EventEmitter<any> = new EventEmitter();

  originalValue: string;

  ngOnInit() {
    this.originalValue = this.value;
  }

  onBlur(value: string) {
    if (value != this.originalValue) {
      this.originalValue = value;
      this.onBlurEvent.emit({id: this.id, name: this.name, sportId: this.sportId, value: value});
    }
  }
}
