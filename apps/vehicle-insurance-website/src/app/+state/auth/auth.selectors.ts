import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthPartialState, State } from './auth.reducer';

export const getAuthState = createFeatureSelector<AuthPartialState, State>(
  AUTH_FEATURE_KEY
);

export const getAuthLoaded = createSelector(
  getAuthState,
  (state: State) => state.loaded
);

export const getAuthIdToken = createSelector(
  getAuthState,
  (state: State) => state.id_token
);

export const getAuthError = createSelector(
  getAuthState,
  (state: State) => state.error
);

export const getAuthErrorCode = createSelector(
  getAuthState,
  getAuthError,
  (state: State, error) => error?.notifications[0]?.code
);
