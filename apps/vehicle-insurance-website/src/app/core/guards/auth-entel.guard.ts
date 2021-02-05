import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { select, Store } from '@ngrx/store';
import { AuthPartialState } from '../../+state/auth/auth.reducer';
import { getAuthIdToken } from '../../+state/auth/auth.selectors';

@Injectable({providedIn: 'root'})
export class AuthEntelGuard implements CanActivate {

  constructor(private store$: Store<AuthPartialState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.store$.pipe(
      select(getAuthIdToken),
      map(token => token !== null)
    );
  }
}
