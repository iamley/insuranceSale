import { createAction, props } from '@ngrx/store';
import { YearVehicleModelEntity, NotificationEnvelopeEntity } from "@mfe-vehicle-insurance/shared/models";

export const loadYearVehicleModels = createAction(
  '[YearVehicleModels] Load YearVehicleModels'
);

export const loadYearVehicleModelsSuccess = createAction(
  '[YearVehicleModels] Load YearVehicleModels Success',
  props<{ yearVehicleModels: YearVehicleModelEntity[] }>()
);

export const loadYearVehicleModelsFailure = createAction(
  '[YearVehicleModels] Load YearVehicleModels Failure',
  props<{ error: NotificationEnvelopeEntity }>()
);

export const changeYearVehicleModelSelected = createAction(
  '[YearVehicleModels] change year vehicle model selected',
  props<{ selectedId: number }>()
);
