import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

import * as LicensePlateActions from './license-plate.actions';
import { LicensePlateService } from "../../core/services/license-plate.service";

@Injectable()
export class LicensePlateEffects {

  getLicencePlatePriceByTypeVehicle = createEffect(() =>
    this.actions$.pipe(
      ofType(LicensePlateActions.getLicencePlatePriceByTypeVehicle),
      switchMap(action => this.licensePlateService.getLicensePlatePriceByTypeVehicleId(`license-plate/price/${action.typeVehicleId}`)
        .pipe(
          map(licensePlatePrice => LicensePlateActions.getLicencePlatePriceByTypeVehicleSuccess(
            { licensePlatePrice }
          )),
          catchError(error => of(LicensePlateActions.getLicencePlatePriceByTypeVehicleFailure(error)))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private licensePlateService: LicensePlateService
  ) {}
}
