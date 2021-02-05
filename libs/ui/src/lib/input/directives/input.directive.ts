import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: "input[entelInput], select[entelInput]"
})
export class InputDirective {
  @HostBinding('class') _class = 'entel-input'
}
