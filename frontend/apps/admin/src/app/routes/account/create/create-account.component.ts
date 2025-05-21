import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@common/services/authService';

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
    const firstName = document.getElementById('firstName') as HTMLInputElement;
    const lastName = document.getElementById('lastName') as HTMLInputElement;

    await this.authService.createAccount(email.value, password.value, firstName.value, lastName.value);
  }
}
