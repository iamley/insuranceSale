import { Constructor } from "./constructor";

export class CanDisable {
  disabled: boolean;
}

export type CanDisableCtor = Constructor<CanDisable>;

export function mixinDisabled<T extends Constructor<{}>>(base: T): CanDisableCtor & T {
  return class extends base {
    private _disabled: boolean = false;

    get disabled() { return this._disabled; }
    set disabled(value: any) { this._disabled = value; }

    constructor(...args: any[]) { super(...args); }
  };
}
