import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleComponent } from './vehicle/vehicle.component';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TypeVehicleEffects } from '@vehicle-insurance-website/+state/vehicle/type-vehicle/type-vehicle.effects';
import { MakeVehicleEffects } from '@vehicle-insurance-website/+state/vehicle/make-vehicle/make-vehicle.effects';
import { ModelVehicleEffects } from '@vehicle-insurance-website/+state/vehicle/model-vehicle/model-vehicle.effects';
import { YearVehicleModelsEffects } from '@vehicle-insurance-website/+state/vehicle/year-vehicle-models/year-vehicle-models.effects';
import { VEHICLE_FEATURE_KEY, reducers } from '@vehicle-insurance-website/+state/vehicle/vehicle.reducer';

// UI
import { EntelButtonModule } from '@mfe-vehicle-insurance/ui/button';
import { EntelInputModule } from '@mfe-vehicle-insurance/ui/input';

const ENTEL_UI_MODULES = [EntelButtonModule, EntelInputModule];

@NgModule({
  declarations: [VehicleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...ENTEL_UI_MODULES,
    VehicleRoutingModule,
    StoreModule.forFeature(VEHICLE_FEATURE_KEY, reducers),
    EffectsModule.forFeature([
      MakeVehicleEffects,
      TypeVehicleEffects,
      ModelVehicleEffects,
      YearVehicleModelsEffects
    ])
  ],
})
export class VehicleModule {}
