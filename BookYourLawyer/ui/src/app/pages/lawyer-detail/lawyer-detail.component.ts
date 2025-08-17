import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lawyer-detail',
  templateUrl: './lawyer-detail.component.html',
  styleUrls: ['./lawyer-detail.component.scss']
})
export class LawyerDetailComponent {
  lawyerId: number;

  constructor(private route: ActivatedRoute) {
    this.lawyerId = +this.route.snapshot.paramMap.get('id')!;
  }
}
