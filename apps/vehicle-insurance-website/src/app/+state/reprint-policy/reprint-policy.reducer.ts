import { Action, createReducer, on } from '@ngrx/store';

import { InsurancePolicyEntity, NotificationEnvelopeEntity } from "@mfe-vehicle-insurance/shared/models";
import * as ReprintPolicyActions from './reprint-policy.actions';

export const REPRINT_POLICY_FEATURE_KEY = 'reprintPolicy';

export interface State  {
  insurancePolicy: InsurancePolicyEntity;
  loaded: boolean;
  error?: NotificationEnvelopeEntity | null;
}

export interface ReprintPolicyPartialState {
  readonly [REPRINT_POLICY_FEATURE_KEY]: State;
}

export const initialState: State = {
  insurancePolicy: null,
  loaded: false,
  error: null,
};

const reprintPolicyReducer = createReducer(
  initialState,
  on(ReprintPolicyActions.reprintPolicy, (state) => ({
    ...state,
    loaded: true
  })),
  on(ReprintPolicyActions.reprintPolicySuccess, (state, { insurancePolicy }) => ({
    ...state,
    insurancePolicy,
    loaded: false
  })),
  on(ReprintPolicyActions.reprintPolicyFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: false
  })),
  on(ReprintPolicyActions.resetReprintPolicyError, (state) => ({
    ...state,
    error: null
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return reprintPolicyReducer(state, action);
}
