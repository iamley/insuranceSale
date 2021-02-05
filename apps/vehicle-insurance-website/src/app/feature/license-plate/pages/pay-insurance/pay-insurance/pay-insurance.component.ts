import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WizardSteps } from '@vehicle-insurance-website/ui/form-wizard/wizard-steps';
import { PaymentMethods } from '@vehicle-insurance-website/core/payment-methods';

import { Store } from '@ngrx/store';
import { LicensePlatePartialState } from '@vehicle-insurance-website/+state/license-plate/license-plate.reducer';
import * as LicensePlateSelectors from '@vehicle-insurance-website/+state/license-plate/license-plate.selectors';
import * as fromWizardActions from '@vehicle-insurance-website/+state/wizard/wizard.actions';

@Component({
  selector: 'viws-pay-insurance',
  templateUrl: './pay-insurance.component.html',
  styleUrls: ['./pay-insurance.component.scss']
})
export class PayInsuranceComponent implements OnInit {
  private _isDisabledBtnPay: boolean;
  private paymentMethod: string;

  private paymentMethodMap: Map<String, PaymentMethods.PaymentMethodFunction>;

  licensePlateVehicle$ = this.store$.select(LicensePlateSelectors.getLicensePlateVehicle);
  licensePlateOwner$ = this.store$.select(LicensePlateSelectors.getLicensePlateOwner);
  licensePlatePrice$ = this.store$.select(LicensePlateSelectors.getLicensePlatePrice);

  constructor(
    private router: Router,
    private store$: Store<LicensePlatePartialState>
  ) {}

  onSubmit() {
    this.paymentMethodMap.get(this.paymentMethod)
      .execute();
  }

  onChangePaymentMethod(value: string) {
    this.paymentMethod = value;
    this._isDisabledBtnPay = (value !== null);
  }

  goBack() {
    // Inactive current wizard step
    this.onChangeWizardStep(WizardSteps.PAY, false);
    // Previous page complete owner data
    this.router.navigate(['entel/soap/datos/propietario'], {
      state: { data: { nextStep: true } }
    }).then();
  }

  onChangeWizardStep(stepId: number, isActivate: boolean) {
    this.store$.dispatch(fromWizardActions.onActivateStep({
      step: { id: stepId, changes: { id: stepId, isActivate: isActivate } }
    }));
  }

  get isDisabledBtnPay() {
    return this._isDisabledBtnPay;
  }

  ngOnInit() {
    // Registry actions by payment method
    this.paymentMethodMap = new Map<String, PaymentMethods.PaymentMethodFunction>([
      ['entel-points', new PaymentMethods.EntelPointsPaymentMethod()],
      ['entel-ticket', new PaymentMethods.EntelTicketPaymentMethod(this.router)],
      ['web-pay/one-pay', new PaymentMethods.WebPayOnePayPaymentMethod()],
      ['entel-visa', new PaymentMethods.EntelVisaPaymentMethod()]
    ]);
  }

}
