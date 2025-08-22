import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class LawyerService {
  private apiUrl = "http://localhost:8080/api/lawyers";

  constructor(private http: HttpClient) {}

  getAllLawyers() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getLawyerById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
