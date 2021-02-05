import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as MakeVehicleActions from './make-vehicle.actions';

import { MakeVehicleEntity, NotificationEnvelopeEntity } from "@mfe-vehicle-insurance/shared/models";

export const MAKE_VEHICLE_FEATURE_KEY = 'make';

export interface State extends EntityState<MakeVehicleEntity> {
  selectedId?: string | number; // which Some record has been selected
  loaded: boolean;
  error?: NotificationEnvelopeEntity
}

export interface MakeVehiclePartialState {
  readonly [MAKE_VEHICLE_FEATURE_KEY]: State;
}

export const makeVehiclesAdapter: EntityAdapter<MakeVehicleEntity> = createEntityAdapter<
  MakeVehicleEntity
>();

export const initialState: State = makeVehiclesAdapter.getInitialState({
  loaded: false,
});

const makeVehicleReducer = createReducer(
  initialState,
  on(MakeVehicleActions.loadMakeVehiclesByTypeVehicle, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(MakeVehicleActions.loadMakeVehiclesByTypeVehicleSuccess, (state, { makeVehicles }) =>
    makeVehiclesAdapter.setAll(makeVehicles, { ...state, loaded: true })
  ),
  on(MakeVehicleActions.loadMakeVehiclesByTypeVehicleFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(MakeVehicleActions.changeMakeVehicleSelected, (state, { selectedId }) => ({
    ...state,
    selectedId
  })),
  on(MakeVehicleActions.resetMakeVehicles, (state) =>
    makeVehiclesAdapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return makeVehicleReducer(state, action);
}
