import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthService {
  private apiUrl = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { email: string; password: string }) {
    return this.http
      .post<{ token: string }>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap((response) => {
          localStorage.setItem("jwt", response.token);
        })
      );
  }

  logout() {
    localStorage.removeItem("jwt");
  }

  getToken() {
    return localStorage.getItem("jwt");
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
