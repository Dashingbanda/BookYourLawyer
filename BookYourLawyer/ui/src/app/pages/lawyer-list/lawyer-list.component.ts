import { Component } from "@angular/core";
import { Lawyer } from "../../interfaces/lawyer.interface";

@Component({
  selector: "app-lawyer-list",
  templateUrl: "./lawyer-list.component.html",
  styleUrls: ["./lawyer-list.component.scss"],
})
export class LawyerListComponent {
  lawyers = [
    {
      id: 1,
      full_name: "Amit Sharma",
      about: "Experienced lawyer handling criminal cases for over a decade.",
      city: "Delhi",
      experience_years: 10,
      hourly_rate: 1500,
      practice_area: "Criminal",
      image: "assets/lawyer_images/lawyer1.jpg",
    },
    {
      id: 2,
      full_name: "Neha Gupta",
      about:
        "Specialist in family law with a focus on divorce and custody cases.",
      city: "Mumbai",
      experience_years: 8,
      hourly_rate: 1200,
      practice_area: "Family",
      image: "assets/lawyer_images/lawyer2.jpg",
    },
    {
      id: 2,
      full_name: "Neha Gupta",
      about:
        "Specialist in family law with a focus on divorce and custody cases.",
      city: "Mumbai",
      experience_years: 8,
      hourly_rate: 1200,
      practice_area: "Family",
      image: "assets/lawyer_images/lawyer2.jpg",
    },
    {
      id: 2,
      full_name: "Neha Gupta",
      about:
        "Specialist in family law with a focus on divorce and custody cases.",
      city: "Mumbai",
      experience_years: 8,
      hourly_rate: 1200,
      practice_area: "Family",
      image: "assets/lawyer_images/lawyer2.jpg",
    },
    {
      id: 2,
      full_name: "Neha Gupta",
      about:
        "Specialist in family law with a focus on divorce and custody cases.",
      city: "Mumbai",
      experience_years: 8,
      hourly_rate: 1200,
      practice_area: "Family",
      image: "assets/lawyer_images/lawyer2.jpg",
    },
    {
      id: 2,
      full_name: "Neha Gupta",
      about:
        "Specialist in family law with a focus on divorce and custody cases.",
      city: "Mumbai",
      experience_years: 8,
      hourly_rate: 1200,
      practice_area: "Family",
      image: "assets/lawyer_images/lawyer2.jpg",
    },
    {
      id: 2,
      full_name: "Neha Gupta",
      about:
        "Specialist in family law with a focus on divorce and custody cases.",
      city: "Mumbai",
      experience_years: 8,
      hourly_rate: 1200,
      practice_area: "Family",
      image: "assets/lawyer_images/lawyer2.jpg",
    },
  ];
}
