import { createAction, props } from '@ngrx/store';
import {
  LicensePlateEntity,
  NotificationEnvelopeEntity,
  InsuranceIssueEntity
} from "@mfe-vehicle-insurance/shared/models";

export const confirmPayment = createAction(
  '[ConfirmPayment] Confirm Payment',
  props<{ licensePlate: LicensePlateEntity }>()
);

export const confirmPaymentSuccess = createAction(
  '[ConfirmPayment] Confirm Payment Success',
  props<{ insuranceIssue: InsuranceIssueEntity }>()
);

export const confirmPaymentFailure = createAction(
  '[ConfirmPayment] Confirm Payment Failure',
  props<{ error: NotificationEnvelopeEntity }>()
);
