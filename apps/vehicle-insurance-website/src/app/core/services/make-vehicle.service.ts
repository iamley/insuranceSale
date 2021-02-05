import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { BaseService } from "@mfe-vehicle-insurance/shared/services";
import { ResponseEntity, MakeVehicleEntity } from "@mfe-vehicle-insurance/shared/models";

@Injectable({ providedIn: 'root' })
export class MakeVehicleService extends BaseService {

  constructor(protected _http: HttpClient) {
    super(_http);
  }

  getMakeVehiclesByTypeVehicle(resource: string): Observable<Array<MakeVehicleEntity>> {
    return super.getResource<ResponseEntity<MakeVehicleEntity>>(resource)
      .pipe(map(res => res.data))
  }
}
