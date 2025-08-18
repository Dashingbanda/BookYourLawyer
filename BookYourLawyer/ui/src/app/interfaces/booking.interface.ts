export interface Booking {
  id: number;
  lawyerId: number; // ID of the lawyer being booked
  userId: number; // ID of the user making the booking
  date: string; // Booking date
  time: string; // Booking time
  service: string; // Service requested
  notes?: string; // Optional notes
}