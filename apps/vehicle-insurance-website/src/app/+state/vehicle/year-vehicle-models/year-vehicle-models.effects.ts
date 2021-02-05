import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap } from 'rxjs/operators';

import * as YearVehicleModelsActions from './year-vehicle-models.actions';
import { YearVehicleModelService } from '@vehicle-insurance-website/core/services/year-vehicle-model.service';

@Injectable()
export class YearVehicleModelsEffects {
  loadYearVehicleModels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(YearVehicleModelsActions.loadYearVehicleModels),
      switchMap(() => this._yearVehicleModelService.getModelYearsVehicle('years').pipe(
        map(yearVehicleModels => YearVehicleModelsActions.loadYearVehicleModelsSuccess({
          yearVehicleModels
        }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private _yearVehicleModelService: YearVehicleModelService
  ) {}
}
