import { createReducer, on, Action } from '@ngrx/store';

import { NotificationEnvelopeEntity } from '@mfe-vehicle-insurance/shared/models';
import * as AuthActions from './auth.actions';
import { AuthTokenModel } from '../../shared/models/auth-token.model';

export const AUTH_FEATURE_KEY = 'auth';

export interface State extends AuthTokenModel {
  loaded: boolean;
  error?: NotificationEnvelopeEntity;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: State;
}

export const initialState: State ={
  id_token: null,
  loaded: false,
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.authenticateUser, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(AuthActions.authenticateUserSuccess, (state, { token }) => ({
    ...state,
    ...token
  })),
  on(AuthActions.authenticateUserFailure, (state, { error }) => ({
    ...state,
    error
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
