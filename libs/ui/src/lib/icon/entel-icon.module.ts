import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EntelIconRegistry } from "./entel-icon.registry";
import { SVG_ICONS_PROVIDERS } from "./entel-icon.providers";
import { IconComponent } from "./icon.component";


@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule],
  exports: [IconComponent],
  providers: [EntelIconRegistry, ...SVG_ICONS_PROVIDERS],
})
export class EntelIconModule {}
