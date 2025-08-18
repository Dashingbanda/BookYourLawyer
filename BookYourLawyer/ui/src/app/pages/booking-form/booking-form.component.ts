import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-booking-form",
  templateUrl: "./booking-form.component.html",
  styleUrls: ["./booking-form.component.scss"],
})
export class BookingFormComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      date: ["", Validators.required],
      time: ["", Validators.required],
      service: ["", Validators.required],
      notes: [""],
    });
  }

  submitBooking() {
    if (this.bookingForm.valid) {
      console.log("Booking Submitted:", this.bookingForm.value);
      alert("Booking submitted Successfully");
    } else {
      alert("Please Fill in the required Details");
    }
  }
}
