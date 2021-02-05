import { Provider } from "@angular/core";
import { SVG_ICONS } from "./entel-icon.registry";

export const SVG_ICONS_PROVIDERS: Array<Provider> = [
  {
    provide: SVG_ICONS,
    useValue: {
      name: 'car',
      svgUrl: 'assets/icons/Beneficios/SVG/Auto-SUV/green-blue@2x.svg'
    },
    multi: true
  },
  {
    provide: SVG_ICONS,
    useValue: {
      name: 'van',
      svgUrl: 'assets/icons/Beneficios/SVG/Camioneta/green-blue@2x.svg'
    },
    multi: true
  },
  {
    provide: SVG_ICONS,
    useValue: {
      name: 'motorcycle',
      svgUrl: 'assets/icons/Beneficios/SVG/Moto/green-blue@2x.svg'
    },
    multi: true
  },
  {
    provide: SVG_ICONS,
    useValue: {
      name: 'drag-car',
      svgUrl: 'assets/icons/Beneficios/SVG/Carro-arrastre/green-blue@2x.svg'
    },
    multi: true
  },
  {
    provide: SVG_ICONS,
    useValue: {
      name: 'minibus',
      svgUrl: 'assets/icons/Beneficios/SVG/Minibus/green-blue@2x.svg'
    },
    multi: true
  },
  {
    provide: SVG_ICONS,
    useValue: {
      name: 'benefit',
      svgUrl: 'assets/icons/Beneficios/SVG/Beneficios/blue@2x.svg'
    },
    multi: true
  },
  {
    provide: SVG_ICONS,
    useValue: {
      name: 'webpay',
      svgUrl: 'assets/icons/logo-webpay/webpay-blue.svg'
    },
    multi: true
  },
  {
    provide: SVG_ICONS,
    useValue: {
      name: 'webpay-black-yellow',
      svgUrl: 'assets/icons/logo-webpay/webpay-black-yellow.svg'
    },
    multi: true
  },
  {
    provide: SVG_ICONS,
    useValue: {
      name: 'one-pay',
      svgUrl: 'assets/icons/one-pay/one-pay-logo.svg'
    },
    multi: true
  },
  {
    provide: SVG_ICONS,
    useValue: {
      name: 'ticket',
      svgUrl: 'assets/icons/pago-cobro/SVG/Boleta/blue@2x.svg'
    },
    multi: true
  },
  {
    provide: SVG_ICONS,
    useValue: {
      name: 'contract',
      svgUrl: 'assets/icons/pago-cobro/SVG/Contrato/green-blue@2x.svg'
    },
    multi: true
  },
  {
    provide: SVG_ICONS,
    useValue: {
      name: 'visa',
      svgUrl: 'assets/icons/pago-cobro/SVG/visa/blue@2x.svg'
    },
    multi: true
  },
  {
    provide: SVG_ICONS,
    useValue: {
      name: 'entel-visa',
      svgUrl: 'assets/icons/pago-cobro/SVG/visa/color.svg'
    },
    multi: true
  },
  {
    provide: SVG_ICONS,
    useValue: {
      name: 'arrow_down',
      svgUrl: 'assets/icons/Navegacion/SVG/arrow-Down/black@2x.svg'
    },
    multi: true
  },
  {
    provide: SVG_ICONS,
    useValue: {
      name: 'arrow_up',
      svgUrl: 'assets/icons/Navegacion/SVG/arrow-Up/black@2x.svg'
    },
    multi: true
  },
  {
    provide: SVG_ICONS,
    useValue: {
      name: 'close',
      svgUrl: 'assets/icons/Navegacion/SVG/Cerrar/blue@2x.svg'
    },
    multi: true
  },
  {
    provide: SVG_ICONS,
    useValue: {
      name: 'locked',
      svgUrl: 'assets/icons/Ornamentales/Bloqueo/Bloqueo-personas.svg'
    },
    multi: true
  },
  {
    provide: SVG_ICONS,
    useValue: {
      name: 'bill',
      svgUrl: 'assets/icons/Ornamentales/Factura/Factura-personas.svg'
    },
    multi: true
  }
];


