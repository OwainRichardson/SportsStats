import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-area',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home-area.component.html',
  styleUrl: './home-area.component.less'
})
export class HomeAreaComponent {

}
