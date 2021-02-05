import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as ConfirmPaymentActions from './confirm-payment.actions';
import { ConfirmPaymentService } from '../../core/services/confirm-payment.service';
import { ConfirmPaymentPartialState } from './confirm-payment.reducer';
import { getAuthIdToken } from '../auth/auth.selectors';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ConfirmPaymentEffects {
  confirmPayment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConfirmPaymentActions.confirmPayment),
      switchMap(action => this.confirmPayment.confirmPayment('insurance-issue', action.licensePlate, new HttpHeaders({
          'Authorization': `Bearer ${this.getToken()}`,
          'Content-Type': 'application/json'
        }))
          .pipe(
            map(insuranceIssue => ConfirmPaymentActions.confirmPaymentSuccess({ insuranceIssue })),
            tap(() => this.router.navigate(['entel/soap/pago/exitoso']))
          )
      ),
      catchError((err, caught) => {
        this.store$.dispatch(ConfirmPaymentActions.confirmPaymentFailure({ error: err.error }));
        return caught;
      })
    )
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private store$: Store<ConfirmPaymentPartialState>,
    private confirmPayment: ConfirmPaymentService
  ) {}

  private getToken() {
    let tokenId = null;
    this.store$.select(getAuthIdToken).subscribe(
      token => {
        tokenId = token;
      }
    );
    return tokenId;
  }
}
