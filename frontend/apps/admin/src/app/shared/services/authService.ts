import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserLoginResponse } from "../types/users/userLoginResponse";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient, private router: Router) { }

    async login(email: string, password: string) {
        const passwordHash = await this.hashPassword(password);
        
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };

        this.http.post<UserLoginResponse>('http://localhost:5253/account/login', {email, passwordHash}, httpOptions).subscribe(response => {
            this.setSession(response.accessToken);
            this.router.navigate(['/']);
        });
    }

    async createAccount(email: string, password: string) {
        const passwordHash = await this.hashPassword(password);
        
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };

        this.http.post<UserLoginResponse>('http://localhost:5253/account/createaccount', {email, passwordHash}, httpOptions).subscribe(response => {
            this.setSession(response.accessToken);
            this.router.navigate(['/']);
        });
    }

    public isAuthenticated() : boolean {
        const token = localStorage.getItem('access-token');
        const helper = new JwtHelperService();
        const isExpired = helper.isTokenExpired(token);

        return !isExpired;
    }

    public logout() {
        localStorage.removeItem('access-token');
        localStorage.removeItem('user-id');
        this.router.navigate(['/account/login']);
    }

    public getRequestHeaders() {
        const headers = { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access-token')
         };

        return {
            headers: new HttpHeaders(headers)
        }
    }

    private async hashPassword(password: string) {
        const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));
        const byteArray = new Uint8Array(hashBuffer);
        return byteArray.reduce((hexString, byte) => hexString + byte.toString(16).padStart(2, '0'), '');
    }

    private setSession(accessToken: string) {
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(accessToken);

        localStorage.setItem('user-id', decodedToken.UserId);
        localStorage.setItem('access-token', accessToken);
    }
}