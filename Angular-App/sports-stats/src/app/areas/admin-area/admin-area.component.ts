import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-area',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin-area.component.html',
  styleUrl: './admin-area.component.less'
})
export class AdminAreaComponent {

}
