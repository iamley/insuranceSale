import { createAction, props } from '@ngrx/store';
import { NotificationEnvelopeEntity, AddressEntity } from '@mfe-vehicle-insurance/shared/models';

export const loadCommunesByName = createAction(
  '[Communes] Load Communes',
  props<{ search: string }>()
);

export const loadCommunesSuccess = createAction(
  '[Communes] Load Communes Success',
  props<{ communes: AddressEntity[] }>()
);

export const loadCommunesFailure = createAction(
  '[Communes] Load Communes Failure',
  props<{ error: NotificationEnvelopeEntity }>()
);
