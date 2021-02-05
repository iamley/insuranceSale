import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayInsuranceRoutingModule } from './pay-insurance-routing.module';
import { PayInsuranceComponent } from './pay-insurance/pay-insurance.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { UiSharedModule } from '@vehicle-insurance-website/shared/modules/ui-shared.module';

import { EntelButtonModule } from '@mfe-vehicle-insurance/ui/button';
import { EntelInputModule } from '@mfe-vehicle-insurance/ui/input';
import { EntelIconModule } from '@mfe-vehicle-insurance/ui/icon';


const ENTEL_UI_MODULES = [
  EntelButtonModule,
  EntelInputModule,
  EntelIconModule
];

@NgModule({
  declarations: [
    PayInsuranceComponent,
    OrderSummaryComponent,
    PaymentMethodsComponent,
  ],
  imports: [
    CommonModule,
    UiSharedModule,
    ...ENTEL_UI_MODULES,
    PayInsuranceRoutingModule
  ]
})
export class PayInsuranceModule { }
