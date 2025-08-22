import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: "root" })
export class BookingService {
  private apiUrl = "http://localhost:8080/api/bookings";

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.authService.getToken()}`,
      }),
    };
  }

  getMyBookings() {
    return this.http.get<any[]>(`${this.apiUrl}/my`, this.getHeaders());
  }

  createBooking(booking: any) {
    return this.http.post(`${this.apiUrl}`, booking, this.getHeaders());
  }
}
