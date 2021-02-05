import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { BaseService } from "@mfe-vehicle-insurance/shared/services";
import { ResponseEntity, VehicleTypeEntity } from "@mfe-vehicle-insurance/shared/models";

@Injectable({providedIn: 'root'})
export class TypeVehicleService extends BaseService {
  constructor(protected _http: HttpClient) {
    super(_http)
  }

  getTypeVehicles(resource: string): Observable<Array<VehicleTypeEntity>> {
    return super.getResource<ResponseEntity<VehicleTypeEntity>>(resource)
      .pipe(map(res => res.data))
  }
}
