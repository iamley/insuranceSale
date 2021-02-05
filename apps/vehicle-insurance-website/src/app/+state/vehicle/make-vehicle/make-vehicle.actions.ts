import { createAction, props } from '@ngrx/store';
import { MakeVehicleEntity, NotificationEnvelopeEntity } from "@mfe-vehicle-insurance/shared/models";

export const loadMakeVehiclesByTypeVehicle = createAction(
  '[MakeVehicles] Load Make Vehicles By Type Vehicle',
  props<{typeVehicleId: string | number }>()
);

export const loadMakeVehiclesByTypeVehicleSuccess = createAction(
  '[MakeVehicles] Load Make Vehicles By Type Vehicle Success',
  props<{ makeVehicles: MakeVehicleEntity[] }>()
);

export const loadMakeVehiclesByTypeVehicleFailure = createAction(
  '[MakeVehicles] Load Make Vehicles By Type Vehicle Failure',
  props<{ error: NotificationEnvelopeEntity }>()
);

export const changeMakeVehicleSelected = createAction(
  '[MakeVehicles] change make vehicle selected',
  props<{ selectedId: number }>()
);

export const resetMakeVehicles = createAction(
  '[MakeVehicles] Reset Make Vehicles'
);
