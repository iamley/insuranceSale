import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as ModelVehicleActions from './model-vehicle.actions';
import { ModelVehicleService } from '../../../core/services/model-vehicle.service';

@Injectable()
export class ModelVehicleEffects {
  loadModelVehiclesByMakeVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ModelVehicleActions.loadModelVehicleByMakeVehicle),
      switchMap((action) => this._modelVehicleService.getModelVehicleByMakeVehicle(`model-vehicles/${action.makeVehicleId}`)
        .pipe(
          map((modelVehicles) => ModelVehicleActions.loadModelVehicleByMakeVehicleSuccess(
            { modelVehicles }
          )),
          catchError(error => of(ModelVehicleActions.loadModelVehicleByMakeVehicleFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private _modelVehicleService: ModelVehicleService
  ) {
  }
}
