import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as YearVehicleModelsActions from './year-vehicle-models.actions';
import { YearVehicleModelEntity } from '@mfe-vehicle-insurance/shared/models';

export const YEAR_VEHICLE_MODELS_FEATURE_KEY = 'yearVehicleModels';

export interface State extends EntityState<YearVehicleModelEntity> {
  selectedId?: string | number; // which YearVehicleModels record has been selected
}

export interface YearVehicleModelsPartialState {
  readonly [YEAR_VEHICLE_MODELS_FEATURE_KEY]: State;
}

export const yearVehicleModelsAdapter: EntityAdapter<YearVehicleModelEntity> = createEntityAdapter<
  YearVehicleModelEntity
>();

export const initialState: State = yearVehicleModelsAdapter.getInitialState();

const yearVehicleModelsReducer = createReducer(
  initialState,
  on(YearVehicleModelsActions.loadYearVehicleModels, (state) => ({
    ...state
  })),
  on(YearVehicleModelsActions.loadYearVehicleModelsSuccess,
    (state, { yearVehicleModels }) =>
      yearVehicleModelsAdapter.setAll(yearVehicleModels, {
        ...state
      })
  ),
  on(YearVehicleModelsActions.loadYearVehicleModelsFailure,
    (state, { error }) => ({ ...state, error })
  ),
  on(YearVehicleModelsActions.changeYearVehicleModelSelected, (state, { selectedId }) => ({
    ...state,
    selectedId,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return yearVehicleModelsReducer(state, action);
}
