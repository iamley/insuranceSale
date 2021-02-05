import { Component, EventEmitter, OnInit, Output } from '@angular/core';

type PaymentMethods = "entel-ticket" | "entel-points" | "web-pay/one-pay" | "entel-visa";

@Component({
  selector: 'viws-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {

  @Output()
  changePaymentMethod = new EventEmitter<PaymentMethods>();

  constructor() { }

  onChange(value: PaymentMethods) {
    this.changePaymentMethod.emit(value);
  }

  ngOnInit() {}

}
