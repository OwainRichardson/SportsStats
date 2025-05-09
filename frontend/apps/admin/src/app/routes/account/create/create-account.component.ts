import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/services/authService';

@Component({
  selector: 'app-create-account',
  imports: [CommonModule],
  templateUrl: './create-account.component.html',
  providers: [AuthService]
})
export class CreateAccountComponent {
  constructor(private authService: AuthService) {}
  
  async createAccount() {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    await this.authService.createAccount(email.value, password.value);
  }
}
