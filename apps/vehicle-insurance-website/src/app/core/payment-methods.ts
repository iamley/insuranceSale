import { Router } from '@angular/router';

export namespace PaymentMethods {

  export interface PaymentMethodFunction {
      execute(): void;
  }

  export class EntelPointsPaymentMethod implements PaymentMethodFunction {
    constructor(private router?: Router) {}

    execute() {
      console.log('---> Entel points')
    }
  }

  export class EntelTicketPaymentMethod implements PaymentMethodFunction {
    constructor(private router?: Router) {}

    execute() {
      this.router.navigate(['entel/soap/pago/validacion-de-usuario'], {
        state: { data: { nextStep: true } }
      }).then();
    }
  }

  export class WebPayOnePayPaymentMethod implements PaymentMethodFunction {
    constructor(private router?: Router) {}

    execute() {
      console.log('---> Web pay | One Pay')
    }
  }

  export class EntelVisaPaymentMethod implements PaymentMethodFunction {
    constructor(private router?: Router) {}

    execute() {
      console.log('---> Entel visa')
    }
  }
}
