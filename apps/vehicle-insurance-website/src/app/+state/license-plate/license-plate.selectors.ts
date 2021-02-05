import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  State,
  LicensePlatePartialState,
  LICENSE_PLATE_FEATURE_KEY,
} from './license-plate.reducer';

export const getLicensePlateState = createFeatureSelector<LicensePlatePartialState,
  State>(LICENSE_PLATE_FEATURE_KEY);


export const getInformationLicensePlateLoaded = createSelector(
  getLicensePlateState,
  (state: State) => state.loaded
);

export const getInformationLicensePlateError = createSelector(
  getLicensePlateState,
  (state: State) => state.error
);

export const getLicensePlate = createSelector(
  getLicensePlateState,
  (state: State) => state.licensePlate
);

export const getLicensePlateKey = createSelector(
  getLicensePlateState,
  (state: State) => state.licensePlate?.key
);

export const getLicensePlateVehicle = createSelector(
  getLicensePlateState,
  (state: State) => ({
    key: state.licensePlate?.key,
    ...state.licensePlate?.vehicle
  })
);

export const getLicensePlateOwner = createSelector(
  getLicensePlateState,
  (state: State) => state.licensePlate?.owner
);

export const getLicensePlatePrice = createSelector(
  getLicensePlateState,
  (state: State) => state.licensePlatePrice
);
