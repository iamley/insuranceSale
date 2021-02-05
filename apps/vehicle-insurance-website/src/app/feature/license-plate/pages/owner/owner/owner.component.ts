import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

import { WizardSteps } from '@vehicle-insurance-website/ui/form-wizard/wizard-steps';

import { select, Store } from '@ngrx/store';
import { OwnerPartialState } from '@vehicle-insurance-website/+state/owner/owner.reducer';
import * as FieldsValidation from '@vehicle-insurance-website/core/validations/fields.validation';
import * as fromLicensePlateActions from '@vehicle-insurance-website/+state/license-plate/license-plate.actions';
import * as fromWizardActions from '@vehicle-insurance-website/+state/wizard/wizard.actions';
import * as fromCommunesActions from '@vehicle-insurance-website/+state/owner/communes/communes.actions';
import {
  getLicensePlateKey,
  getLicensePlateOwner
} from '@vehicle-insurance-website/+state/license-plate/license-plate.selectors';
import { getAllCommunes } from '@vehicle-insurance-website/+state/owner/owner.selectors';

@Component({
  selector: 'viws-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit, OnDestroy {

  licensePlateOwnerForm = this.fb.group({
    key: ['', FieldsValidation.rutValidator()],
    first_name: [''],
    first_surname: [''],
    second_surname: [''],
    gender: ['', Validators.required],
    email: ['', FieldsValidation.emailValidator()],
    phone: ['', FieldsValidation.cellPhoneValidator()],
    address: this.fb.control(null)
  });

  private _confirmEmail = '';
  private licensePLateOwnerSubscribe: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store$: Store<OwnerPartialState>
  ) {}

  addressFormatter = (value) => value.name;

  addressSearch = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap((text) => this.store$.dispatch(fromCommunesActions.loadCommunesByName(
        { search: text }
      ))),
      switchMap(() => this.store$.pipe(
        select(getAllCommunes)
      ))
    );

  onSubmit() {
    this.store$.dispatch(fromLicensePlateActions.updateLicensePlateOwnerInfo({
      owner: this.licensePlateOwnerForm.value
    }));
    // Active next step
    this.onChangeWizardStep(WizardSteps.PAY, true);
    // Navigate to pay step
    this.router.navigate(['entel/soap/pago'], {
      state: { data: { nextStep: true } }
    }).then();
  }

  goBack() {
    this.onChangeWizardStep(WizardSteps.PAY, false);
    this.store$.select(getLicensePlateKey).pipe(
      tap((licensePLateKey) => this.router.navigate(['entel/soap/datos/vehiculo'], {
        state: { data: { key: licensePLateKey, fetchData: false } }
      }).then())
    ).subscribe();
  }

  onChangeWizardStep(stepId: number, isActivate: boolean) {
    this.store$.dispatch(fromWizardActions.onActivateStep({
      step: { id: stepId, changes: { id: stepId, isActivate: isActivate } }
    }));
  }

  onKeyupConfirmEmail(email) {
    this._confirmEmail = email;
  }

  isValidField(field: string) {
    return this.licensePlateOwnerForm.get(field).valid;
  }

  get isValidConfirmEmail(): boolean {
    return (this._confirmEmail === this.licensePlateOwnerForm.get('email').value);
  }

  get disabledBtn() {
    return this.licensePlateOwnerForm.invalid || !this.isValidConfirmEmail;
  }

  ngOnInit() {
    this.onChangeWizardStep(WizardSteps.DATA, true);
    this.licensePLateOwnerSubscribe = this.store$.select(getLicensePlateOwner)
      .pipe(
        tap((owner) => this.licensePlateOwnerForm.patchValue(owner))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.licensePLateOwnerSubscribe.unsubscribe();
  }

}
