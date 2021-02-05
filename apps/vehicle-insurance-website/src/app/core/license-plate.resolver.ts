import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as LicensePlateActions from '../+state/license-plate/license-plate.actions';
import { LicensePlatePartialState } from "../+state/license-plate/license-plate.reducer";
import { LicensePlateService } from './services/license-plate.service';

@Injectable({providedIn: 'root'})
export class LicensePlateResolver implements Resolve<any>{

  constructor(
    private router: Router,
    private licensePlate: LicensePlateService,
    private store$: Store<LicensePlatePartialState>
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const data = this.router.getCurrentNavigation().extras.state?.data;

    if(data.fetchData) {
      this.store$.dispatch(LicensePlateActions.getInformationFromTheLicensePlateByKey({ key: data.key }));

      return this.licensePlate.getInformationLicensePlateByKey(`license-plates/${data.key}`)
        .pipe(
          tap((licensePlate) => this.store$.dispatch(LicensePlateActions.getInformationFromTheLicensePlateSuccess(
            { licensePlate }
            ))
          ),
          catchError(error => {
            this.store$.dispatch(LicensePlateActions.getInformationFromTheLicensePlateFailure({ error }));
            return of(null);
          })
        )
    }

    return of(null);
  }
}
