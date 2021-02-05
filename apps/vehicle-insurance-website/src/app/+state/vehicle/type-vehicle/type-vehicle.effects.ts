import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as TypeVehicleActions from './type-vehicle.actions';
import { TypeVehicleService } from '../../../core/services/type-vehicle.service';

@Injectable()
export class TypeVehicleEffects {
  loadTypeVehicles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TypeVehicleActions.loadTypeVehicle),
      switchMap(() => this._typeVehicle.getTypeVehicles('type-vehicles')
        .pipe(
          map(typeVehicles => TypeVehicleActions.loadTypeVehicleSuccess({ typeVehicles })),
          catchError(error => of(TypeVehicleActions.loadTypeVehicleFailure(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private _typeVehicle: TypeVehicleService
  ) {
  }
}
