import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { catchError, map, switchMap } from "rxjs/operators";

import { Store } from '@ngrx/store';
import * as MakeVehiclesActions from './make-vehicle.actions';
import * as ModelVehiclesActions from '../model-vehicle/model-vehicle.actions';
import * as LicensePlateActions from '@vehicle-insurance-website/+state/license-plate/license-plate.actions';
import { MakeVehicleService } from "@vehicle-insurance-website/core/services/make-vehicle.service";
import { VehiclePartialState } from '../vehicle.reducer';

@Injectable()
export class MakeVehicleEffects {
  loadMakeVehicles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MakeVehiclesActions.loadMakeVehiclesByTypeVehicle),
      switchMap(action => this._makeVehicleService.getMakeVehiclesByTypeVehicle(`make-vehicles/${action.typeVehicleId}`)
        .pipe(
          map(makeVehicles => MakeVehiclesActions.loadMakeVehiclesByTypeVehicleSuccess({makeVehicles})),
        )
      ),
      catchError((error, caught) => {
        this.store$.dispatch(MakeVehiclesActions.loadMakeVehiclesByTypeVehicleFailure({ error }));
        this.store$.dispatch(MakeVehiclesActions.resetMakeVehicles());
        this.store$.dispatch(ModelVehiclesActions.resetModelVehicle());
        this.store$.dispatch(LicensePlateActions.resetLicensePlateMakeInfo());
        this.store$.dispatch(LicensePlateActions.resetLicensePlateModelInfo());
        return caught;
      })

    )
  );

  constructor(
    private actions$: Actions,
    private store$: Store<VehiclePartialState>,
    private _makeVehicleService: MakeVehicleService
  ) {}
}
