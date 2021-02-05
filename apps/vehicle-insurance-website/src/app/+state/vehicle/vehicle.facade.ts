import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

import { VehiclePartialState } from './vehicle.reducer';
import * as VehicleSelectors from './vehicle.selectors'
import { getLicensePlateVehicle } from '../license-plate/license-plate.selectors';

@Injectable({ providedIn: 'root' })
export class VehicleFacade {

  // License Plate
  licensePlateVehicle$ = this.store$.pipe(
    select(getLicensePlateVehicle)
  );

  // Type Vehicles

  allTypeVehicles$ = this.store$.pipe(
    select(VehicleSelectors.getAllTypeVehicles)
  );

  typeVehicleSelected$ = this.store$.pipe(
    select(VehicleSelectors.getTypeVehicleSelected)
  );

  // Make vehicles

  allMakeVehicles$ = this.store$.pipe(
    select(VehicleSelectors.getAllMakeVehicles)
  );

  makeVehicleSelected$ = this.store$.pipe(
    select(VehicleSelectors.getMakeVehicleSelected)
  );

  // Model Vehicles

  allModelVehicles$ = this.store$.pipe(
    select(VehicleSelectors.getAllModelVehicles)
  );

  modelVehicleSelected$ = this.store$.pipe(
    select(VehicleSelectors.getModelVehicleSelected)
  );

  // Year Vehicle Models

  allYearVehicleModels$ = this.store$.pipe(
    select(VehicleSelectors.getAllYearVehicleModels)
  );

  yearVehicleModelsSelected$ = this.store$.pipe(
    select(VehicleSelectors.getYearVehicleModelsSelected)
  )

  constructor(private store$: Store<VehiclePartialState>) {}

  dispatch(action: Action) {
    this.store$.dispatch(action);
  }
}
