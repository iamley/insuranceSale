import { Injectable } from '@angular/core';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { InsurancePolicyEntity } from "@mfe-vehicle-insurance/shared/models";
import { ReprintPolicyPartialState } from './reprint-policy.reducer';

import * as ReprintPolicyActions from './reprint-policy.actions';
import { ReprintInsurancePolicyService } from '../../core/services/reprint-insurance-policy.service';


@Injectable()
export class ReprintPolicyEffects {
  loadReprintPolicy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReprintPolicyActions.reprintPolicy),
      switchMap(action => this.reprintInsurancePolicy.downloadPdfInsurancePolicy(
        `insurance-policy/reprint/${action.licensePlate}`)
        .pipe(
          tap(this.openDownload),
          map( insurancePolicy => ReprintPolicyActions.reprintPolicySuccess({ insurancePolicy })),
        )
      ),
      catchError((error, caught) => {
        this.store$.dispatch(ReprintPolicyActions.reprintPolicyFailure({ error: error.error }))
        return caught;
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store$: Store<ReprintPolicyPartialState>,
    private reprintInsurancePolicy: ReprintInsurancePolicyService
  ) {}

  openDownload(insurancePolicy: InsurancePolicyEntity) {
    const linkSource = `data:application/pdf;base64,${insurancePolicy.pdf_insurance_policy}`;
    const downloadLink = document.createElement('a');
    const fileName = `SOAP_${insurancePolicy.patent}`;

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }
}
