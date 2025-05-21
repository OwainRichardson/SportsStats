import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@common/services/authService';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html'
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
