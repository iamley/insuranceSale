import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from "@mfe-vehicle-insurance/shared/services";
import { AddressEntity, ResponseEntity } from "@mfe-vehicle-insurance/shared/models";

@Injectable({ providedIn: 'root' })
export class CommuneService extends BaseService  {

  constructor(protected _http: HttpClient) {
    super(_http);
  }

  getCommunes(resource: string): Observable<Array<AddressEntity>> {
    return this.getResource<ResponseEntity<AddressEntity>>(resource)
      .pipe(map(res => res.data));
  }
}
