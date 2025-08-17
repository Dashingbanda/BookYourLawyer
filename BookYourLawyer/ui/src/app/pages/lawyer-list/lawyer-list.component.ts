import { Component } from '@angular/core';

@Component({
  selector: 'app-lawyer-list',
  templateUrl: './lawyer-list.component.html',
  styleUrls: ['./lawyer-list.component.scss']
})
export class LawyerListComponent {
  lawyers = [
    { id: 1, name: 'John Doe', specialization: 'Criminal Law' },
    { id: 2, name: 'Jane Smith', specialization: 'Family Law' }
  ];
}
