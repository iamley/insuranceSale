import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CONFIRMPAYMENT_FEATURE_KEY,
  State,
  ConfirmPaymentPartialState,
} from './confirm-payment.reducer';

export const getConfirmPaymentState = createFeatureSelector<
  ConfirmPaymentPartialState,
  State
>(CONFIRMPAYMENT_FEATURE_KEY);

export const getInsuranceIssue = createSelector(
  getConfirmPaymentState,
  (state: State) => state.insuranceIssue
);

export const getConfirmPaymentLoaded = createSelector(
  getConfirmPaymentState,
  (state: State) => state.loaded
);

export const getConfirmPaymentError = createSelector(
  getConfirmPaymentState,
  (state: State) => state.error
);

