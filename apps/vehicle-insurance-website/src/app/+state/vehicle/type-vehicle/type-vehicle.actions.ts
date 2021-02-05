import { createAction, props } from '@ngrx/store';

import { NotificationEnvelopeEntity, VehicleTypeEntity } from "@mfe-vehicle-insurance/shared/models";

export const loadTypeVehicle = createAction('[TypeVehicles] Load TypeVehicles');

export const loadTypeVehicleSuccess = createAction(
  '[TypeVehicle] Load Type Vehicles Success',
  props<{ typeVehicles: VehicleTypeEntity[] }>()
);

export const loadTypeVehicleFailure = createAction(
  '[TypeVehicle] Load Type Vehicles Failure',
  props<{ error: NotificationEnvelopeEntity }>()
);

export const changeTypeVehicleSelected = createAction(
  '[TypeVehicle] change type vehicle selected',
  props<{ selectedId: number }>()
);
