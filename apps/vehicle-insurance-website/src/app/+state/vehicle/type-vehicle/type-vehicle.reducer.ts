import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as TypeVehicleActions from './type-vehicle.actions';
import { VehicleTypeEntity, NotificationEnvelopeEntity } from "@mfe-vehicle-insurance/shared/models";

export const TYPE_VEHICLE_FEATURE_KEY = 'type';

export interface State extends EntityState<VehicleTypeEntity> {
  selectedId?: number | string,
  loaded: boolean;
  error?: NotificationEnvelopeEntity
}

export interface TypeVehiclePartialState {
  readonly [TYPE_VEHICLE_FEATURE_KEY]: State;
}

export const typeVehicleAdapter: EntityAdapter<VehicleTypeEntity> = createEntityAdapter<
  VehicleTypeEntity
>();

export const initialState: State = typeVehicleAdapter.getInitialState({
  loaded: false,
});

const typeVehicleReducer = createReducer(
  initialState,
  on(TypeVehicleActions.loadTypeVehicle, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(TypeVehicleActions.loadTypeVehicleSuccess, (state, { typeVehicles }) =>
    typeVehicleAdapter.setAll(typeVehicles, { ...state, loaded: true })
  ),
  on(TypeVehicleActions.loadTypeVehicleFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(TypeVehicleActions.changeTypeVehicleSelected, (state, { selectedId }) => ({
    ...state,
    selectedId,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return typeVehicleReducer(state, action);
}
