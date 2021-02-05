import { createAction, props } from '@ngrx/store';
import { NotificationEnvelopeEntity } from '@mfe-vehicle-insurance/shared/models';
import { AuthTokenModel } from '../../shared/models/auth-token.model';
import { AuthCredentialsModel } from '../../shared/models/auth-credentials.model';

export const authenticateUser = createAction(
  '[Auth] Authenticate User',
  props<{ credentials: AuthCredentialsModel }>()
);

export const authenticateUserSuccess = createAction(
  '[Auth] Authenticate User Success',
  props<{ token: AuthTokenModel }>()
);

export const authenticateUserFailure = createAction(
  '[Auth] Authenticate User Failure',
  props<{ error: NotificationEnvelopeEntity }>()
);
