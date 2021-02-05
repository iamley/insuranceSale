import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import * as AuthActions from '@vehicle-insurance-website/+state/auth/auth.actions';
import { AuthPartialState } from '@vehicle-insurance-website/+state/auth/auth.reducer';

import * as FieldValidators from '@vehicle-insurance-website/core/validations/fields.validation';

@Component({
  selector: 'viws-user-validation',
  templateUrl: './user-validation.component.html',
  styleUrls: ['./user-validation.component.scss']
})
export class UserValidationComponent implements OnInit {

  userValidationForm = this.fb.group({
    rut: ['', FieldValidators.rutValidator()],
    phone: ['', FieldValidators.cellPhoneValidator()],
    key: ['']
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store$: Store<AuthPartialState>
  ) {}

  onSubmit() {
    const rut: string = this.userValidationForm.get('rut').value;
    const rutParts = rut.split('-');

    this.store$.dispatch(AuthActions.authenticateUser({
      credentials: {
        ...this.userValidationForm.value,
        rut: rutParts[0]
      }
    }));
  }

  isFieldInvalid(field: string): boolean {
    return this.userValidationForm.get(field).touched &&
      this.userValidationForm.get(field).invalid;
  }

  goBack() {
    // Navigate previous page select payment method
    this.router.navigateByUrl('entel/soap/pago')
      .then();
  }

  ngOnInit() {
  }

}
