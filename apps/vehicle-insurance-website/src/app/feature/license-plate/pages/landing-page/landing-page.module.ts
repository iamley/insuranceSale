import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { EntelButtonModule } from '@mfe-vehicle-insurance/ui/button';
import { EntelInputModule } from '@mfe-vehicle-insurance/ui/input';
import { UtilsModule } from '@mfe-vehicle-insurance/utils';

import { UiSharedModule } from '@vehicle-insurance-website/shared/modules/ui-shared.module';
import { FrequentlyQuestionGroupComponent } from '@vehicle-insurance-website/ui/frequently-question-group/frequently-question-group.component';
import { FrequentlyQuestionComponent } from '@vehicle-insurance-website/ui/frequently-question-group/frequently-question/frequently-question.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromReprintPolicy from '@vehicle-insurance-website/+state/reprint-policy/reprint-policy.reducer';
import { ReprintPolicyEffects } from '@vehicle-insurance-website/+state/reprint-policy/reprint-policy.effects';

import { InsuranceQuoteFormComponent } from './insurance-quote-form/insurance-quote-form.component';
import { LicensePlateDownloadFormComponent } from './license-plate-download-form/license-plate-download-form.component';

const ENTEL_UI_MODULES = [EntelButtonModule, EntelInputModule];

@NgModule({
  declarations: [
    LandingPageComponent,
    InsuranceQuoteFormComponent,
    LicensePlateDownloadFormComponent,
    FrequentlyQuestionGroupComponent,
    FrequentlyQuestionComponent
  ],
  imports: [
    CommonModule,
    UiSharedModule,
    UtilsModule,
    ...ENTEL_UI_MODULES,
    FormsModule,
    ReactiveFormsModule,
    LandingPageRoutingModule,
    StoreModule.forFeature(
      fromReprintPolicy.REPRINT_POLICY_FEATURE_KEY,
      fromReprintPolicy.reducer
    ),
    EffectsModule.forFeature([ReprintPolicyEffects])
  ]
})
export class LandingPageModule {
}
