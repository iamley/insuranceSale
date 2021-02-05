import { createFeatureSelector, createSelector } from '@ngrx/store';

import { typeVehicleAdapter } from "./type-vehicle/type-vehicle.reducer";
import { makeVehiclesAdapter } from "./make-vehicle/make-vehicle.reducer";
import { modelVehiclesAdapter } from "./model-vehicle/model-vehicle.reducer";
import { yearVehicleModelsAdapter } from './year-vehicle-models/year-vehicle-models.reducer'
import { State, VehiclePartialState, VEHICLE_FEATURE_KEY } from "./vehicle.reducer";

// Lookup the 'TypeVehicle' feature state managed by NgRx
export const getVehicleState = createFeatureSelector<
  VehiclePartialState,
  State
  >(VEHICLE_FEATURE_KEY);

const typeVehiclesEntitySelector = typeVehicleAdapter.getSelectors();
const makeVehiclesEntitySelector = makeVehiclesAdapter.getSelectors();
const modelVehiclesEntitySelector = modelVehiclesAdapter.getSelectors();
const yearVehicleModelsEntitySelector = yearVehicleModelsAdapter.getSelectors();

// Type Vehicles Selectors

export const getTypeVehicleEntities = createSelector(getVehicleState, (state: State) =>
  typeVehiclesEntitySelector.selectEntities(state.type)
);

export const geTypeVehicleSelectedId = createSelector(
  getVehicleState,
  (state: State) => state.type.selectedId
);

export const getTypeVehicleSelected = createSelector(
  getTypeVehicleEntities,
  geTypeVehicleSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

export const getAllTypeVehicles = createSelector(
  getVehicleState,
  (state: State) => typeVehiclesEntitySelector.selectAll(state.type)
);

// Model Vehicles Selectors

export const getAllModelVehicles = createSelector(
  getVehicleState,
  (state: State) => modelVehiclesEntitySelector.selectAll(state.model)
);

export const getModelVehicleEntities = createSelector(getVehicleState, (state: State) =>
  modelVehiclesEntitySelector.selectEntities(state.model)
);

export const getModelVehicleSelectedId = createSelector(
  getVehicleState,
  (state: State) => state.model.selectedId
);

export const getModelVehicleSelected = createSelector(
  getModelVehicleEntities,
  getModelVehicleSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

// Make Vehicles selectors

export const getAllMakeVehicles = createSelector(
  getVehicleState,
  (state: State) => makeVehiclesEntitySelector.selectAll(state.make)
);

export const getMakeVehicleEntities = createSelector(getVehicleState, (state: State) =>
  makeVehiclesEntitySelector.selectEntities(state.make)
);

export const getMakeVehicleSelectedId = createSelector(
  getVehicleState,
  (state: State) => state.make.selectedId
);

export const getMakeVehicleSelected = createSelector(
  getMakeVehicleEntities,
  getMakeVehicleSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

// Year Vehicle Models Selectors

export const getAllYearVehicleModels = createSelector(
  getVehicleState,
  (state: State) => yearVehicleModelsEntitySelector.selectAll(state.yearVehicleModels)
);

export const getYearVehicleModelsEntities = createSelector(getVehicleState, (state: State) =>
  yearVehicleModelsEntitySelector.selectEntities(state.yearVehicleModels)
);

export const getYearVehicleModelsSelectedId = createSelector(
  getVehicleState,
  (state: State) => state.yearVehicleModels.selectedId
);

export const getYearVehicleModelsSelected = createSelector(
  getYearVehicleModelsEntities,
  getYearVehicleModelsSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
