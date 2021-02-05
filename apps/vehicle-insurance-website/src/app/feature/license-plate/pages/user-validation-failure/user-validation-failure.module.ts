import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserValidationFailureRoutingModule } from './user-validation-failure-routing.module';
import { UserValidationFailureComponent } from './user-validation-failure/user-validation-failure.component';
import { EntelButtonModule } from '@mfe-vehicle-insurance/ui/button';

@NgModule({
  declarations: [UserValidationFailureComponent],
  imports: [
    CommonModule,
    EntelButtonModule,
    UserValidationFailureRoutingModule
  ]
})
export class UserValidationFailureModule { }
