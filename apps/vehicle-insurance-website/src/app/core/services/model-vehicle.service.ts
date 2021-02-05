import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { BaseService } from "@mfe-vehicle-insurance/shared/services";
import { ResponseEntity, ModelVehicleEntity } from "@mfe-vehicle-insurance/shared/models";

@Injectable({ providedIn: 'root' })
export class ModelVehicleService extends BaseService {

  constructor(protected _http: HttpClient) {
    super(_http);
  }

  getModelVehicleByMakeVehicle(resource: string) : Observable<Array<ModelVehicleEntity>> {
    return super.getResource<ResponseEntity<ModelVehicleEntity>>(resource)
      .pipe(map(res => res.data))
  }
}
