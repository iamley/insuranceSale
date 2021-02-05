import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { TestBed } from "@angular/core/testing";
import { Observable } from "rxjs";

import { BaseService } from "@mfe-vehicle-insurance/shared/services";
import { environment } from "@mfe-vehicle-insurance/shared/environments";

import { licensePlateFactory } from "./factories/license-plate.factory";


class BaseTestingService extends BaseService {
  public getResource<R>(resource: string): Observable<R> {
    return super.getResource(resource);
  }
}

describe('Base service methods', () => {
  let baseService: BaseTestingService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BaseTestingService]
    });

    baseService = TestBed.inject(BaseTestingService)
    httpTestingController = TestBed.inject(HttpTestingController);
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  test('#getById should return an Observable type license plate', () => {
    let licensePlateMock = licensePlateFactory()

    baseService.getResource('license-plate/ABCD23')
      .subscribe(licensePlate =>
        expect(licensePlate).toEqual(licensePlateMock)
      );

    const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/license-plate/ABCD23`);
    expect(req.request.method).toBe("GET");
    req.flush(licensePlateMock)
  })
})
