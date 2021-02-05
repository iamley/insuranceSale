import { createAction, props } from '@ngrx/store';
import { ModelVehicleEntity, NotificationEnvelopeEntity } from "@mfe-vehicle-insurance/shared/models";

export const loadModelVehicleByMakeVehicle = createAction(
  '[Model Vehicles] Load Model Vehicles By Make Vehicle',
  props<{ makeVehicleId: string | number }>()
);

export const loadModelVehicleByMakeVehicleSuccess = createAction(
  '[Model Vehicles] Load Model Vehicles By Make Vehicle Success',
  props<{ modelVehicles: ModelVehicleEntity[] }>()
);

export const loadModelVehicleByMakeVehicleFailure = createAction(
  '[ModelVehicle] Load Model Vehicles By Make Vehicle Failure',
  props<{ error: NotificationEnvelopeEntity }>()
);

export const changeModelVehicleSelected = createAction(
  '[ModelVehicles] change model vehicle selected',
  props<{ selectedId: number }>()
);

export const resetModelVehicle = createAction(
  '[ModelVehicle] Reset Model Vehicles'
);
