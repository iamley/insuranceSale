import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as CommunesActions from './communes.actions';
import { NotificationEnvelopeEntity, AddressEntity } from "@mfe-vehicle-insurance/shared/models";

export const COMMUNES_FEATURE_KEY = 'communes';

export interface State extends EntityState<AddressEntity> {
  loaded: boolean;
  error?: NotificationEnvelopeEntity;
}

export interface CommunesPartialState {
  readonly [COMMUNES_FEATURE_KEY]: State;
}

export const communesAdapter: EntityAdapter<AddressEntity> = createEntityAdapter<
  AddressEntity
>();

export const initialState: State = communesAdapter.getInitialState({
  loaded: false,
});

const communesReducer = createReducer(
  initialState,
  on(CommunesActions.loadCommunesByName, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CommunesActions.loadCommunesSuccess, (state, { communes }) =>
    communesAdapter.setAll(communes, { ...state, loaded: true })
  ),
  on(CommunesActions.loadCommunesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return communesReducer(state, action);
}
