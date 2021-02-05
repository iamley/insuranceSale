import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ModelVehicleActions from './model-vehicle.actions';
import { ModelVehicleEntity, NotificationEnvelopeEntity } from "@mfe-vehicle-insurance/shared/models";

export const MODEL_VEHICLE_FEATURE_KEY = 'model';

export interface State extends EntityState<ModelVehicleEntity> {
  selectedId?: string | number; // which Some record has been selected
  loaded: boolean;
  error?: NotificationEnvelopeEntity;
}

export interface ModelVehiclePartialState {
  readonly [MODEL_VEHICLE_FEATURE_KEY]: State;
}

export const modelVehiclesAdapter: EntityAdapter<ModelVehicleEntity> = createEntityAdapter<
  ModelVehicleEntity
>();

export const initialState: State = modelVehiclesAdapter.getInitialState({
  loaded: false,
});

const modelVehicleReducer = createReducer(
  initialState,
  on(ModelVehicleActions.loadModelVehicleByMakeVehicle, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ModelVehicleActions.loadModelVehicleByMakeVehicleSuccess, (state, { modelVehicles }) =>
    modelVehiclesAdapter.setAll(modelVehicles, { ...state, loaded: true })
  ),
  on(ModelVehicleActions.loadModelVehicleByMakeVehicleFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(ModelVehicleActions.changeModelVehicleSelected, (state, { selectedId }) => ({
    ...state,
    selectedId,
  })),
  on(ModelVehicleActions.resetModelVehicle, (state) =>
    modelVehiclesAdapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return modelVehicleReducer(state, action);
}
