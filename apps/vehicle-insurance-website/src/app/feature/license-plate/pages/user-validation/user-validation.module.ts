import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserValidationRoutingModule } from './user-validation-routing.module';
import { UserValidationComponent } from './user-validation/user-validation.component';

import { EntelButtonModule } from '@mfe-vehicle-insurance/ui/button';
import { EntelInputModule } from '@mfe-vehicle-insurance/ui/input';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from '@vehicle-insurance-website/+state/auth/auth.reducer';
import { AuthEffects } from '@vehicle-insurance-website/+state/auth/auth.effects';

const ENTEL_UI_MODULES = [EntelButtonModule, EntelInputModule];

@NgModule({
  declarations: [UserValidationComponent],
  imports: [
    CommonModule,
    ...ENTEL_UI_MODULES,
    ReactiveFormsModule,
    FormsModule,
    UserValidationRoutingModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class UserValidationModule {}
