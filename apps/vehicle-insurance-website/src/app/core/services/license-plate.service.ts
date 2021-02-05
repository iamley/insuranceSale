import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { BaseService } from "@mfe-vehicle-insurance/shared/services";
import { LicensePlateEntity, LicensePlatePriceEntity } from "@mfe-vehicle-insurance/shared/models";

@Injectable({ providedIn: 'root' })
export class LicensePlateService extends BaseService {

  constructor(protected _http: HttpClient) {
    super(_http)
  }

  getInformationLicensePlateByKey(resource: string): Observable<LicensePlateEntity> {
    return super.getResource(resource);
  }

  getLicensePlatePriceByTypeVehicleId(resource: string): Observable<LicensePlatePriceEntity> {
    return super.getResource(resource);
  }
}
