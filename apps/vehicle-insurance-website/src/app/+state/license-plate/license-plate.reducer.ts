import { createReducer, on, Action } from '@ngrx/store';

import * as LicensePlateActions from './license-plate.actions';
import {
  LicensePlateEntity,
  LicensePlatePriceEntity,
  NotificationEnvelopeEntity
} from '@mfe-vehicle-insurance/shared/models';
import { WizardPartialState } from '../wizard/wizard.reducer';
import { ReprintPolicyPartialState } from '../reprint-policy/reprint-policy.reducer';
import { ConfirmPaymentPartialState } from '../confirm-payment/confirm-payment.reducer';

export const LICENSE_PLATE_FEATURE_KEY = 'license_plate';

export interface State {
  licensePlate: LicensePlateEntity
  licensePlatePrice?: LicensePlatePriceEntity,
  loaded: boolean;
  error?: NotificationEnvelopeEntity
}

export interface LicensePlatePartialState extends WizardPartialState, ReprintPolicyPartialState,
  ConfirmPaymentPartialState {
  readonly [LICENSE_PLATE_FEATURE_KEY]: State;
}

export const initialState: State = {
  licensePlate: null,
  loaded: true
};

const licensePlateReducer = createReducer(
  initialState,
  on(LicensePlateActions.getInformationFromTheLicensePlateByKey, (state) => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(LicensePlateActions.getInformationFromTheLicensePlateSuccess, (state, { licensePlate }) => ({
    licensePlate,
    loaded: true
  })),
  on(LicensePlateActions.getInformationFromTheLicensePlateFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: true
  })),
  on(LicensePlateActions.getLicencePlatePriceByTypeVehicle, (state) => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(LicensePlateActions.getLicencePlatePriceByTypeVehicleSuccess, (state, { licensePlatePrice }) => ({
    ...state,
    licensePlatePrice,
    loaded: true
  })),
  on(LicensePlateActions.getLicencePlatePriceByTypeVehicleFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(LicensePlateActions.updateLicensePlateVehicleInfo, (state, { vehicle }) => ({
    ...state,
    licensePlate: {
      key: state.licensePlate.key,
      owner: { ...state.licensePlate.owner },
      vehicle: { ...vehicle }
    }
  })),
  on(LicensePlateActions.updateLicensePlateOwnerInfo, (state, { owner }) => ({
    ...state,
    licensePlate: {
      key: state.licensePlate.key,
      owner: { ...owner },
      vehicle: { ...state.licensePlate.vehicle }
    }
  })),
  on(LicensePlateActions.resetLicensePlateInfo, () => ({
    loaded: true,
    licensePlate: null
  })),
  on(LicensePlateActions.resetLicensePlateMakeInfo, (state) => ({
    ...state,
    licensePlate: {
      ...state.licensePlate,
      vehicle: {
        ...state.licensePlate.vehicle,
        make: null
      }
    }
  })),
  on(LicensePlateActions.resetLicensePlateModelInfo, (state) => ({
    ...state,
    licensePlate: {
      ...state.licensePlate,
      vehicle: {
        ...state.licensePlate.vehicle,
        model: null
      }
    }
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return licensePlateReducer(state, action);
}
