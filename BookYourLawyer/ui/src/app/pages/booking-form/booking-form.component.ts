import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      name: [''],
      date: [''],
      notes: ['']
    });
  }

  submitBooking() {
    console.log('Booking Submitted:', this.bookingForm.value);
    alert('Booking submitted! (Dummy for now)');
  }
}
