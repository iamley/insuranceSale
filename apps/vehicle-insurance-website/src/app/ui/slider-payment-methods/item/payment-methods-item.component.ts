import { Component, Input } from "@angular/core";

@Component({
  selector: 'viws-payment-methods-item',
  templateUrl: './payment-methods-item.component.html',
  styleUrls: ['./payment-methods-item.component.scss']
})
export class PaymentMethodsItemComponent {

  @Input()
  icon: string;

  @Input()
  icon2: string;

  @Input()
  description: string;

  @Input()
  isIconTuple:boolean;
}
