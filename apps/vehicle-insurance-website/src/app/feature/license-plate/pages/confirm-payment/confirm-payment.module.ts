import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmPaymentRoutingModule } from './confirm-payment-routing.module';
import { ConfirmPaymentComponent } from './confirm-payment/confirm-payment.component';

import { EntelButtonModule } from '@mfe-vehicle-insurance/ui/button';
import { EntelInputModule } from '@mfe-vehicle-insurance/ui/input';
import { EntelIconModule } from '@mfe-vehicle-insurance/ui/icon';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromConfirmPayment from '@vehicle-insurance-website/+state/confirm-payment/confirm-payment.reducer';
import { ConfirmPaymentEffects } from '@vehicle-insurance-website/+state/confirm-payment/confirm-payment.effects';

const ENTEL_UI_MODULES = [EntelButtonModule, EntelInputModule, EntelIconModule];

@NgModule({
  declarations: [ConfirmPaymentComponent],
  imports: [
    CommonModule,
    ...ENTEL_UI_MODULES,
    ConfirmPaymentRoutingModule,
    StoreModule.forFeature(
      fromConfirmPayment.CONFIRMPAYMENT_FEATURE_KEY,
      fromConfirmPayment.reducer
    ),
    EffectsModule.forFeature([ConfirmPaymentEffects]),
  ],
})
export class ConfirmPaymentModule {}
