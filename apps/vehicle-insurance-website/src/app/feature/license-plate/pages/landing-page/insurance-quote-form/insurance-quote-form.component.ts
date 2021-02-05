import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import { Store } from '@ngrx/store';
import * as FieldsValidation from "../../../../../core/validations/fields.validation";
import { LicensePlatePartialState } from '../../../../../+state/license-plate/license-plate.reducer';
import {
  getInformationLicensePlateLoaded
} from '../../../../../+state/license-plate/license-plate.selectors';

@Component({
  selector: 'viws-insurance-quote-form',
  templateUrl: './insurance-quote-form.component.html',
  styleUrls: ['./insurance-quote-form.component.scss']
})
export class InsuranceQuoteFormComponent implements OnInit {

  insuranceQuoteForm = new FormGroup({
    licensePlate: new FormControl('', FieldsValidation.licensePlateValidator())
  });

  loading$ = this.store$.select(getInformationLicensePlateLoaded);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store$: Store<LicensePlatePartialState>
  ) {}

  onSubmit() {
    this.router.navigate(['datos/vehiculo'], {
      state: {
        data: {
          nextStep: true,
          key: this.insuranceQuoteForm.controls['licensePlate'].value,
          fetchData: true
        }
      },
      relativeTo: this.route
    }).then();
  }

  get isLicensePlateValid() {
    const licensePlate = this.insuranceQuoteForm.controls['licensePlate'];
    return licensePlate.invalid && licensePlate.dirty;
  }

  ngOnInit() {}

}
