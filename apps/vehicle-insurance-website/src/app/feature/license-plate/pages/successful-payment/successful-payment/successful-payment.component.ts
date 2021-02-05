import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as LicensePlateSelectors from '@vehicle-insurance-website/+state/license-plate/license-plate.selectors';
import { LicensePlatePartialState } from '@vehicle-insurance-website/+state/license-plate/license-plate.reducer';
import * as WizardActions from '@vehicle-insurance-website/+state/wizard/wizard.actions';
import * as ReprintPolicyActions from '@vehicle-insurance-website/+state/reprint-policy/reprint-policy.actions';
import { WizardSteps } from '@vehicle-insurance-website/ui/form-wizard/wizard-steps';

@Component({
  selector: 'viws-successful-payment',
  templateUrl: './successful-payment.component.html',
  styleUrls: ['./successful-payment.component.scss']
})
export class SuccessfulPaymentComponent implements OnInit {

  licensePlateVehicle$ = this.store$.select(LicensePlateSelectors.getLicensePlateVehicle);
  licensePlateOwner$ = this.store$.select(LicensePlateSelectors.getLicensePlateOwner);
  licensePlatePrice$ = this.store$.select(LicensePlateSelectors.getLicensePlatePrice);

  constructor(
    private router: Router,
    private store$: Store<LicensePlatePartialState>
  ) {}

  goLandingPage() {
    this.resetWizard();
    this.router.navigateByUrl('entel/soap')
      .then();
  }

  private resetWizard() {
    this.store$.dispatch(WizardActions.resetSteps({
        steps: [
          { id: WizardSteps.PAY, changes: { id: WizardSteps.PAY, isActivate: false } },
          { id: WizardSteps.DATA, changes: { id: WizardSteps.DATA, isActivate: false } }
        ]
      }
    ));
  }

  downloadPdfInsurancePolicy() {
    this.store$.select(LicensePlateSelectors.getLicensePlateVehicle)
      .pipe(tap((vehicle) => this.store$.dispatch(
        ReprintPolicyActions.reprintPolicy({ licensePlate: vehicle.key })
      ))).subscribe();
  }

  ngOnInit() {}

}
