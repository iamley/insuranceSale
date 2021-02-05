import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import * as FieldsValidation from '@vehicle-insurance-website/core/validations/fields.validation';

import { Store } from '@ngrx/store';
import * as ReprintPolicyActions from '@vehicle-insurance-website/+state/reprint-policy/reprint-policy.actions';
import { ReprintPolicyPartialState } from '@vehicle-insurance-website/+state/reprint-policy/reprint-policy.reducer';
import * as ReprintPolicySelectors from '@vehicle-insurance-website/+state/reprint-policy/reprint-policy.selectors';

@Component({
  selector: 'viws-license-plate-download-form',
  templateUrl: './license-plate-download-form.component.html',
  styleUrls: ['./license-plate-download-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LicensePlateDownloadFormComponent {
  @HostBinding('class') _class = 'viws-license-plate-download-form';

  licensePlateDownloadForm = new FormGroup({
    licensePlate: new FormControl('', FieldsValidation.licensePlateValidator())
  });

  loaded$ = this.store$.select(ReprintPolicySelectors.getReprintPolicyLoaded);
  error$ = this.store$.select(ReprintPolicySelectors.getReprintPolicyError);

  constructor(private store$: Store<ReprintPolicyPartialState>) {}

  get isLicensePlateValid() {
    const licensePlate = this.licensePlateDownloadForm.controls['licensePlate'];
    return licensePlate.invalid && licensePlate.dirty;
  }

  close() {
    this.store$.dispatch(
      ReprintPolicyActions.resetReprintPolicyError()
    )
  }

  downloadPdfInsurancePolicy() {
    const licensePlate = this.licensePlateDownloadForm.get('licensePlate').value;
    this.store$.dispatch(ReprintPolicyActions.reprintPolicy({ licensePlate }))
  }
}


