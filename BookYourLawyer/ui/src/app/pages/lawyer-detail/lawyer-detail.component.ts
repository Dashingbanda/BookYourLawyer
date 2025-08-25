import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

interface Case {
  id: number;
  title: string;
  description: string;
  date: string;
  outcome: string;
}

interface Lawyer {
  id: number;
  full_name: string;
  city: string;
  practice_area: string;
  experience_years: number;
  hourly_rate: number;
  about: string;
  image: string;
  victories: Case[];
}

@Component({
  selector: "app-lawyer-detail",
  templateUrl: "./lawyer-detail.component.html",
  styleUrls: ["./lawyer-detail.component.scss"],
})
export class LawyerDetailComponent implements OnInit {
  lawyer!: Lawyer;
  newVictory: Case = {
    id: 0,
    title: "",
    description: "",
    date: "",
    outcome: "",
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    // Mock Data (replace with API later)
    this.lawyer = {
      id: 1,
      full_name: "Amit Sharma",
      city: "Delhi",
      practice_area: "Criminal",
      experience_years: 10,
      hourly_rate: 1500,
      about: "Experienced lawyer handling criminal defense cases in Delhi.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      victories: [
        {
          id: 1,
          title: "Won Landmark Case",
          description: "Successfully defended client in a high-profile case.",
          date: "2023-09-15",
          outcome: "Client Acquitted",
        },
        {
          id: 2,
          title: "Civil Dispute Settlement",
          description: "Resolved a major civil dispute outside of court.",
          date: "2022-06-10",
          outcome: "Settlement Achieved",
        },
      ],
    };
  }

  addVictory() {
    if (this.newVictory.title && this.newVictory.description) {
      this.newVictory.id = this.lawyer.victories.length + 1;
      this.lawyer.victories.unshift({ ...this.newVictory });
      this.newVictory = {
        id: 0,
        title: "",
        description: "",
        date: "",
        outcome: "",
      };
    } else {
      alert("Please enter all required fields.");
    }
  }
}
