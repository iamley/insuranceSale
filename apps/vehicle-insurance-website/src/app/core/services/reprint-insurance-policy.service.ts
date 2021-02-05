import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BaseService } from "@mfe-vehicle-insurance/shared/services";
import { InsurancePolicyEntity } from "@mfe-vehicle-insurance/shared/models";

@Injectable({providedIn: 'root'})
export class ReprintInsurancePolicyService extends BaseService {

  constructor(protected _http: HttpClient) {
    super(_http);
  }

  downloadPdfInsurancePolicy(resource: string): Observable<InsurancePolicyEntity> {
    return super.getResource(resource)
  }
}
