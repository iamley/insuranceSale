import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BaseService } from "@mfe-vehicle-insurance/shared/services";
import { AuthCredentialsModel } from '../../shared/models/auth-credentials.model';
import { AuthTokenModel } from '../../shared/models/auth-token.model';

@Injectable({providedIn: 'root'})
export class AuthEntelService extends BaseService{

  constructor(protected _http: HttpClient) {
    super(_http);
  }

  login(resource: string, credentials: AuthCredentialsModel): Observable<AuthTokenModel> {
    return super.post<AuthCredentialsModel, AuthTokenModel>(resource, credentials);
  }
}
