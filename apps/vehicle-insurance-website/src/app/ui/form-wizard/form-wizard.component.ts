import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { WizardPartialState } from "@vehicle-insurance-website/+state/wizard/wizard.reducer";
import { getAllWizard } from "@vehicle-insurance-website/+state/wizard/wizard.selectors";
import { WizardEntity } from "@vehicle-insurance-website/+state/wizard/wizard.models";

@Component({
  selector: 'viws-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss'],
  host: {
    'class': 'viws-form-wizard'
  },
  encapsulation: ViewEncapsulation.None
})
export class FormWizardComponent implements OnInit {

  wizardSteps$ : Observable<WizardEntity[]>;

  constructor(private store$: Store<WizardPartialState>) {}

  ngOnInit() {
    this.wizardSteps$ = this.store$.select(getAllWizard);
  }
}
