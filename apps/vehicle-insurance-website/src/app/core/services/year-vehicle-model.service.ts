import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from "@mfe-vehicle-insurance/shared/services";
import { ResponseEntity, YearVehicleModelEntity } from "@mfe-vehicle-insurance/shared/models";

@Injectable({ providedIn: 'root' })
export class YearVehicleModelService extends BaseService {

  getModelYearsVehicle(resource: string): Observable<Array<YearVehicleModelEntity>> {
      return super.getResource<ResponseEntity<YearVehicleModelEntity>>(resource)
        .pipe(map(res => res.data));
  }
}
