import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {EntelIconRegistry} from "./entel-icon.registry";

@Component({
  selector: 'entel-icon',
  template: '<img [src]="iconSvg" [attr.alt]="iconName">',
  encapsulation: ViewEncapsulation.None
})
export class IconComponent implements OnInit {

  @Input('icon')
  iconName: string;

  constructor(private svgIconsRegistry: EntelIconRegistry) {}

  ngOnInit() {}

  get iconSvg() {
    return this.svgIconsRegistry.getIconByName(this.iconName);
  }

}
