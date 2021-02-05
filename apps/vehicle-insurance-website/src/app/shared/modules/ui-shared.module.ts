import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//NGRX
import { StoreModule } from '@ngrx/store';
import * as fromWizard from '../../+state/wizard/wizard.reducer';

import { EntelIconModule } from '@mfe-vehicle-insurance/ui/icon';

import { RoundedBarComponent } from '@vehicle-insurance-website/ui/rounded-bar/rounded-bar.component';
import { RoundedBarItemComponent } from '@vehicle-insurance-website/ui/rounded-bar/item/rounded-bar-item.component';
import { FormWizardComponent } from '@vehicle-insurance-website/ui/form-wizard/form-wizard.component';
import { SliderPaymentMethodsComponent } from '@vehicle-insurance-website/ui/slider-payment-methods/slider-payment-methods.component';
import { PaymentMethodsItemComponent } from '@vehicle-insurance-website/ui/slider-payment-methods/item/payment-methods-item.component';
import { TabGroupComponent } from '@vehicle-insurance-website/ui/tab-group/tab-group.component';
import { TabComponent } from '@vehicle-insurance-website/ui/tab-group/tab/tab.component';
import { VehicleSummaryComponent } from '@vehicle-insurance-website/ui/vehicle-summary/vehicle-summary.component';
import { OwnerSummaryComponent } from '@vehicle-insurance-website/ui/owner-summary/owner-summary.component';

@NgModule({
  declarations: [
    RoundedBarComponent,
    RoundedBarItemComponent,
    FormWizardComponent,
    SliderPaymentMethodsComponent,
    PaymentMethodsItemComponent,
    TabGroupComponent,
    TabComponent,
    VehicleSummaryComponent,
    OwnerSummaryComponent
  ],
  imports: [
    CommonModule,
    EntelIconModule,
    StoreModule.forFeature(
      fromWizard.WIZARD_FEATURE_KEY,
      fromWizard.reducer
    )
  ],
  exports: [
    RoundedBarComponent,
    RoundedBarItemComponent,
    FormWizardComponent,
    EntelIconModule,
    SliderPaymentMethodsComponent,
    PaymentMethodsItemComponent,
    TabGroupComponent,
    TabComponent,
    VehicleSummaryComponent,
    OwnerSummaryComponent
  ],
})
export class UiSharedModule {}
