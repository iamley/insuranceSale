import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthEntelService } from '../../core/services/auth-entel.service';
import { AuthPartialState } from './auth.reducer';

@Injectable()
export class AuthEffects {
  loadAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authenticateUser),
      switchMap(action => this.authService.login('auth/payment-entel-ticket', action.credentials).pipe(
        map(token => AuthActions.authenticateUserSuccess({ token })),
        tap(() => this.router.navigate(['entel/soap/pago/confirmar']))
      )),
      catchError((error, caught) => {
        this.store$.dispatch(AuthActions.authenticateUserFailure({ error: error.error }));
        this.authenticationFailure(error);
        return caught;
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store$: Store<AuthPartialState>,
    private authService: AuthEntelService,
    private router: Router
  ) {}

  private authenticationFailure(error) {
    if (error?.error?.notifications[0]?.code === 'RUT_NOT_HAVE_PERMISSION')
      this.router.navigate(['entel/soap/pago/validacion-de-usuario-fallida']);
  }
}
