import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.less'
})
export class CardComponent {
  @Input() name: string;
  @Input() icon: string;
  @Input() link: string;
}
