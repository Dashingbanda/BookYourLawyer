import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LawyerListComponent } from './pages/lawyer-list/lawyer-list.component';
import { LawyerDetailComponent } from './pages/lawyer-detail/lawyer-detail.component';
import { BookingFormComponent } from './pages/booking-form/booking-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/lawyers', pathMatch: 'full' },
  { path: 'lawyers', component: LawyerListComponent },
  { path: 'lawyers/:id', component: LawyerDetailComponent },
  { path: 'bookings', component: BookingFormComponent },
  { path: '**', redirectTo: '/lawyers' } // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
