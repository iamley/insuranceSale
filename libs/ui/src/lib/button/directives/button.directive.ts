import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from "@angular/core";
import { CanColor, CanColorCtor, mixinColor } from "@mfe-vehicle-insurance/shared/core/common-behaviors";

/** @docs-private */
class EntelButtonBase {
  constructor(public _elementRef: ElementRef) {}
}

const _EntelButtonMixinBase: CanColorCtor & typeof
  EntelButtonBase = mixinColor(EntelButtonBase, "primary");

@Directive({
  selector: 'button[entelButton], a[entelButton]',
  inputs: ['color']
})
export class EntelButtonDirective extends _EntelButtonMixinBase implements CanColor {

  darkClassPrefix: string;

  @HostBinding('class') get _class() { return 'entel-button' };

  @HostListener('mouseenter') onMouseEnter() {
    this.render2.addClass(
      this._elementRef.nativeElement,
      `${this.darkClassPrefix}-${this.color}`
    );
    this.render2.addClass(this._elementRef.nativeElement,
      `entel-${this.color}-contrast`
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render2.removeClass(
      this._elementRef.nativeElement,
      `${this.darkClassPrefix}-${this.color}`
    );

    this.render2.removeClass(this._elementRef.nativeElement,
      `entel-${this.color}-contrast`
    );
  }

  constructor(public _elementRef: ElementRef, public render2: Renderer2) {
    super(_elementRef)
    this.darkClassPrefix = 'entel-dark';
  }

}
