import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NGRX
import { StoreModule } from "@ngrx/store";
import * as fromProducts from "../../+state/license-plate/license-plate.reducer";
import { EffectsModule } from "@ngrx/effects";
import { LicensePlateEffects } from "../../+state/license-plate/license-plate.effects";

import { FeatureLicensePlateRoutingModule } from './feature-license-plate-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromProducts.LICENSE_PLATE_FEATURE_KEY,
      fromProducts.reducer
    ),
    EffectsModule.forFeature([LicensePlateEffects]),
    FeatureLicensePlateRoutingModule
  ]
})
export class FeatureLicensePlateModule { }
