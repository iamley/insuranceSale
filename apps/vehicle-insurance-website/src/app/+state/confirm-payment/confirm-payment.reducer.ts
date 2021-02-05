import { createReducer, on, Action } from '@ngrx/store';

import * as ConfirmPaymentActions from './confirm-payment.actions';
import { InsuranceIssueEntity, NotificationEnvelopeEntity } from '@mfe-vehicle-insurance/shared/models';
import { AuthPartialState } from '../auth/auth.reducer';

export const CONFIRMPAYMENT_FEATURE_KEY = 'confirmPayment';

export interface State {
  insuranceIssue: InsuranceIssueEntity;
  loaded: boolean;
  error?: NotificationEnvelopeEntity | null;
}

export interface ConfirmPaymentPartialState extends AuthPartialState{
  readonly [CONFIRMPAYMENT_FEATURE_KEY]: State;
}


export const initialState: State = {
  insuranceIssue: null,
  loaded: false
};

const confirmPaymentReducer = createReducer(
  initialState,
  on(ConfirmPaymentActions.confirmPayment, (state) => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(ConfirmPaymentActions.confirmPaymentSuccess, (state, { insuranceIssue }) => ({
    ...state,
    insuranceIssue
  })),
  on(ConfirmPaymentActions.confirmPaymentFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return confirmPaymentReducer(state, action);
}
