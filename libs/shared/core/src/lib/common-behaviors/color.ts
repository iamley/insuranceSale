import { Constructor } from "./constructor";
import { ElementRef } from "@angular/core";

/** Possible color palette values. */
export type ThemePalette = 'primary' | 'accent' | 'warn' | undefined;

export interface CanColor {
  /** Theme color palette for the component. */
  color: ThemePalette;

  /** Default color to fall back to if no value is set. */
  defaultColor: ThemePalette | undefined;
}

export interface HasElementRef {
  _elementRef: ElementRef;
}

export type CanColorCtor = Constructor<CanColor>;

/** Mixin to augment a directive with a `color` property. */
export function mixinColor<T extends Constructor<HasElementRef>>(
  base: T, defaultColor?: ThemePalette): CanColorCtor & T {
  return class extends base {
    private _color: ThemePalette;
    defaultColor = defaultColor;

    get color(): ThemePalette { return this._color; }
    set color(value: ThemePalette) {
      const colorPalette = value || this.defaultColor;

      if (colorPalette !== this._color) {
        if (this._color) {
          this._elementRef.nativeElement.classList.remove(`entel-${this._color}`);
        }
        if (colorPalette) {
          this._elementRef.nativeElement.classList.add(`entel-${colorPalette}`);
        }

        this._color = colorPalette;
      }
    }

    constructor(...args: any[]) {
      super(...args);

      // Set the default color that can be specified from the mixin.
      this.color = defaultColor;
    }
  };
}
