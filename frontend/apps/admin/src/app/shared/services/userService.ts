import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserDetails } from "../types/users/userDetails";
import { AuthService } from "./authService";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient, private authService: AuthService) { }

    getUserDetails(): Observable<UserDetails> {
        return this.http.get<UserDetails>('http://localhost:5253/users/current', this.authService.getRequestHeaders());
    }
}