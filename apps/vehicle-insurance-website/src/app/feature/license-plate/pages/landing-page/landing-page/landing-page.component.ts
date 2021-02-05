import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map } from "rxjs/operators";

import { FREQUENTLY_QUESTIONS } from "./frequently-questions";
import { FrequentlyQuestion } from "@vehicle-insurance-website/ui/frequently-question-group/frequently-question";

@Component({
  selector: 'viws-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  bannerImg$ = this.breakpointObserver.observe([Breakpoints.Web])
    .pipe(
      map(breakPoint => breakPoint.matches ?
        'assets/images/main-banner.png' : 'assets/images/main-banner-mv.png'
      )
    );

  roundedBarItems: Array<any> = [
    {
      icon: 'car',
      description: 'AUTOS, SW Y JEEP',
      price: '$4.990'
    },
    {
      icon: 'van',
      description: 'CAMIONETA',
      price: '$7.990'
    },
    {
      icon: 'motorcycle',
      description: 'MOTO',
      price: '$34.990'
    },
    {
      icon: 'drag-car',
      description: 'CARRO DE ARRASTRE',
      price: '$3.990'
    },    {
      icon: 'minibus',
      description: 'MINIBUS',
      price: '$19.990'
    }
  ];

  payMethods: Array<any> = [
    {
      icon: 'benefit',
      name: 'Pago con puntos Entel'
    },
    {
      icon: 'ticket',
      name: 'Paga con tu boleta Entel'
    },
    {
      icon: 'webpay',
      name: 'WebPay'
    },
    {
      icon: 'visa',
      name: 'Entel Visa'
    },
    {
      icon: 'benefit',
      icon2: 'webpay',
      name: 'Pago Mixto',
      isIconTuple: true
    }
  ]

  frequentlyQuestions: FrequentlyQuestion[] = FREQUENTLY_QUESTIONS;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {}
}
