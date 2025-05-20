import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/services/authService';

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

    const loginButton = document.getElementById('login-button') as HTMLInputElement;
    loginButton.disabled = true;

    this.authService.login(email.value, password.value);
  }
}
