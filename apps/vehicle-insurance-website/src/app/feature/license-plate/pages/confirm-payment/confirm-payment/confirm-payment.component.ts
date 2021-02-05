import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';

import { OwnerEntity } from '@mfe-vehicle-insurance/shared/models';

import { Store } from '@ngrx/store';
import * as ConfirmationPaymentActions from '@vehicle-insurance-website/+state/confirm-payment/confirm-payment.actions';
import { LicensePlatePartialState } from '@vehicle-insurance-website/+state/license-plate/license-plate.reducer';
import {
  getLicensePlate,
  getLicensePlatePrice
} from '@vehicle-insurance-website/+state/license-plate/license-plate.selectors';

@Component({
  selector: 'viws-confirm-payment',
  templateUrl: './confirm-payment.component.html',
  styleUrls: ['./confirm-payment.component.scss']
})
export class ConfirmPaymentComponent implements OnInit {

  licensePlatePrice$ = this.store$.select(getLicensePlatePrice);
  licensePlate$ = this.store$.select(getLicensePlate);

  constructor(
    private router: Router,
    private store$: Store<LicensePlatePartialState>
  ) {
  }

  onSubmit() {
    this.licensePlate$.pipe(
      tap((licensePlate) => {
        this.store$.dispatch(
          ConfirmationPaymentActions.confirmPayment({
            licensePlate: {
              ...licensePlate,
              owner: this.ownerBuild(licensePlate.owner),
              paymentMethod: 'Boleta Entel'
            }
          })
        )
      })
    ).subscribe();
  }

  goBack() {
    // Navigate previous page select payment method
    this.router.navigateByUrl('entel/soap/pago')
      .then();
  }

  ngOnInit() {}

  private ownerBuild(owner: OwnerEntity) {
    return {
      key: owner.key,
      first_name: owner.first_name,
      first_surname: owner.first_surname,
      second_surname: owner.second_surname,
      gender: owner.gender === 'M' ? 'M' : 'F',
      email: owner.email,
      phone: owner.second_surname,
    }
  }
}
