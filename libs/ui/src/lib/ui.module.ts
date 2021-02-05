import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntelInputModule } from "./input";
import { ButtonModule } from "./button";

@NgModule({
  imports: [
    CommonModule,
    EntelInputModule,
    ButtonModule
  ],
  exports: [
    EntelInputModule,
    ButtonModule
  ]
})
export class UiModule {}
