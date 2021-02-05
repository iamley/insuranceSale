import { Inject, Injectable, InjectionToken } from "@angular/core";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

export const SVG_ICONS = new InjectionToken<Array<SvgIconInfo>>('SvgIcons');

export interface SvgIconInfo {
  name: string;
  svgUrl: string
}

@Injectable()
export class EntelIconRegistry {

  constructor(@Inject(SVG_ICONS) private svgIcons: Array<SvgIconInfo>, private sanitizer: DomSanitizer) {}

  getIconByName(name: string) : SafeResourceUrl | null {
    const svgIcon = this.svgIcons.find(value => value.name === name);
    return svgIcon ? this.sanitizer.bypassSecurityTrustResourceUrl(svgIcon.svgUrl) : null
  }
}
