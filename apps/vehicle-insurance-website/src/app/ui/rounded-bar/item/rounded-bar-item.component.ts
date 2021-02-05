import { Component, HostBinding, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "viws-rounded-bar-item",
  templateUrl: './rounded-bar-item.component.html',
  styleUrls: ['./rounded-bar-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RoundedBarItemComponent {

  @HostBinding('class') get _class() {
    return 'viws-rounded-bar__item justify-content-lg-center flex-sm-fill flex-md-fill'
  }

  @Input()
  icon: string;

  @Input()
  description: string;

  @Input()
  price: string;
}
