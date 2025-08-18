export interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  education: string;
  totalCases: number;
  casesWon: number;
  imageUrl: string; // URL for the lawyer's image
  location: string; // Current location of the lawyer
}
