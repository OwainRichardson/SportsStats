import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/services/authService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterLink],
  templateUrl: './login.component.html',
  providers: [AuthService],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login() {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    this.authService.login(email.value, password.value);
  }
}
