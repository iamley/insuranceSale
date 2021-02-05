import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner/owner.component';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommunesEffects } from '@vehicle-insurance-website/+state/owner/communes/communes.effects';
import { OWNER_FEATURE_KEY, reducers } from '@vehicle-insurance-website/+state/owner/owner.reducer';

import { EntelButtonModule } from '@mfe-vehicle-insurance/ui/button';
import { EntelInputModule } from '@mfe-vehicle-insurance/ui/input';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const ENTEL_UI_MODULES = [EntelButtonModule, EntelInputModule];

@NgModule({
  declarations: [OwnerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwnerRoutingModule,
    ...ENTEL_UI_MODULES,
    StoreModule.forFeature(OWNER_FEATURE_KEY, reducers),
    EffectsModule.forFeature([CommunesEffects]),
    NgbModule
  ]
})
export class OwnerModule {}
