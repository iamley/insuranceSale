import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';

import { select, Store } from '@ngrx/store';
import { LicensePlatePartialState } from '../+state/license-plate/license-plate.reducer';
import { getLicensePlateVehicle } from '../+state/license-plate/license-plate.selectors';
import * as LicensePlateActions from '../+state/license-plate/license-plate.actions';

@Injectable({ providedIn: 'root'})
export class LicensePlatePaymentResolver implements Resolve<any> {

  constructor(private router: Router, private store$: Store<LicensePlatePartialState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.store$.pipe(
      first(),
      select(getLicensePlateVehicle),
      tap((vehicle) => {
        this.store$.dispatch(
          LicensePlateActions.getLicencePlatePriceByTypeVehicle({ typeVehicleId: vehicle.type?.id })
        );
      })
    );
  }

}
