import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntelButtonDirective } from "./directives/button.directive";

@NgModule({
  declarations: [EntelButtonDirective],
  imports: [
    CommonModule
  ],
  exports: [EntelButtonDirective]
})
export class EntelButtonModule { }
