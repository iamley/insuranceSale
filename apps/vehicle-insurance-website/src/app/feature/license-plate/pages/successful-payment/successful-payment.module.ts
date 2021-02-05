import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiSharedModule } from '@vehicle-insurance-website/shared/modules/ui-shared.module';

import { SuccessfulPaymentRoutingModule } from './successful-payment-routing.module';
import { SuccessfulPaymentComponent } from './successful-payment/successful-payment.component';
import { OrderSummaryCardComponent } from './order-summary-card/order-summary-card.component';

import { EntelButtonModule } from '@mfe-vehicle-insurance/ui/button';
import { CrossSellingCardComponent } from './cross-selling-card/cross-selling-card.component';


const ENTEL_UI_MODULES = [
  EntelButtonModule,
];

@NgModule({
  declarations: [SuccessfulPaymentComponent, OrderSummaryCardComponent, CrossSellingCardComponent],
  imports: [
    CommonModule,
    UiSharedModule,
    ...ENTEL_UI_MODULES,
    SuccessfulPaymentRoutingModule
  ]
})
export class SuccessfulPaymentModule { }
