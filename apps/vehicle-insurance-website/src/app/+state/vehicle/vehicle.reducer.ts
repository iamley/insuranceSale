import { ActionReducerMap } from "@ngrx/store";

import * as fromTypeVehicle from "./type-vehicle/type-vehicle.reducer";
import * as fromMakeVehicle from "./make-vehicle/make-vehicle.reducer";
import * as fromModelVehicle from "./model-vehicle/model-vehicle.reducer";
import * as fromYearVehicleModels from "./year-vehicle-models/year-vehicle-models.reducer";

import { LicensePlatePartialState } from "../license-plate/license-plate.reducer";

export const VEHICLE_FEATURE_KEY = 'vehicle';

export interface State {
  type: fromTypeVehicle.State;
  make: fromMakeVehicle.State;
  model: fromModelVehicle.State;
  yearVehicleModels: fromYearVehicleModels.State;
}

export interface VehiclePartialState extends LicensePlatePartialState, fromTypeVehicle.TypeVehiclePartialState,
  fromMakeVehicle.MakeVehiclePartialState {

  readonly [VEHICLE_FEATURE_KEY]: State
}

export const reducers: ActionReducerMap<State> = {
  type: fromTypeVehicle.reducer,
  make: fromMakeVehicle.reducer,
  model: fromModelVehicle.reducer,
  yearVehicleModels: fromYearVehicleModels.reducer
}
