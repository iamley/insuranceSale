import { createFeatureSelector, createSelector } from '@ngrx/store';
import { REPRINT_POLICY_FEATURE_KEY, ReprintPolicyPartialState, State } from './reprint-policy.reducer';

// Lookup the 'ReprintPolicy' feature state managed by NgRx
export const getReprintPolicyState = createFeatureSelector<
  ReprintPolicyPartialState,
  State
>(REPRINT_POLICY_FEATURE_KEY);

export const getReprintPolicyPdf = createSelector(
  getReprintPolicyState,
  (state: State) => state.insurancePolicy
);

export const getReprintPolicyLoaded = createSelector(
  getReprintPolicyState,
  (state: State) => state.loaded
);

export const getReprintPolicyError = createSelector(
  getReprintPolicyState,
  (state: State) => state.error
);
