import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserDetails } from "../../shared/types/users/userDetails";
import { AuthService } from "./authService";
import { Observable } from "rxjs";
import { baseUrl } from "./serviceConstants";

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient, private authService: AuthService) { }

    getUserDetails(): Observable<UserDetails> {
        return this.http.get<UserDetails>(`${baseUrl}/users/current`, this.authService.getRequestHeaders());
    }
}