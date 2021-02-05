import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'viws-user-validation-failure',
  templateUrl: './user-validation-failure.component.html',
  styleUrls: ['./user-validation-failure.component.scss']
})
export class UserValidationFailureComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goBack() {
    this.router.navigateByUrl("entel/soap/pago")
      .then();
  }
}
