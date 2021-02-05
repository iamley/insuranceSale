import { createAction, props } from '@ngrx/store';
import { InsurancePolicyEntity, NotificationEnvelopeEntity } from "@mfe-vehicle-insurance/shared/models";

export const reprintPolicy = createAction(
  '[ReprintPolicy] Reprint Policy',
  props<{ licensePlate: string }>()
);

export const reprintPolicySuccess = createAction(
  '[ReprintPolicy] Reprint Policy Success',
  props<{ insurancePolicy: InsurancePolicyEntity }>()
);

export const reprintPolicyFailure = createAction(
  '[ReprintPolicy] Reprint Policy Failure',
  props<{ error: NotificationEnvelopeEntity }>()
);

export const resetReprintPolicyError = createAction(
    '[ReprintPolicy] reset reprint policy error',
);
