import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BaseService } from "@mfe-vehicle-insurance/shared/services";
import { InsuranceIssueEntity, LicensePlateEntity } from "@mfe-vehicle-insurance/shared/models";


@Injectable({providedIn: 'root'})
export class ConfirmPaymentService extends BaseService {

  constructor(protected _http: HttpClient) {
    super(_http);
  }

  confirmPayment(resource: string, body: LicensePlateEntity, headers): Observable<InsuranceIssueEntity> {
    return super.postWithHeaders<LicensePlateEntity, InsuranceIssueEntity>(resource, body, headers);
  }
}
