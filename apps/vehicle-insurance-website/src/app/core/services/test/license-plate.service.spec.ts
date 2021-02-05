import { HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { TestBed } from '@angular/core/testing';
import { environment } from "@mfe-vehicle-insurance/shared/environments";

import { LicensePlateService } from '../license-plate.service';
import { licensePlateFactory } from "./factories/license-plate.factory";

describe('LicensePlateService', () => {
  let service: LicensePlateService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LicensePlateService]
    });

    service = TestBed.inject(LicensePlateService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  test('#getInformationLicensePlateByKey should be create a request to get the license plate info by key', () => {
    let licensePlateMock = licensePlateFactory();

    service.getInformationLicensePlateByKey('licensePlate/ABCD23')
      .subscribe(licensePlate =>
        expect(licensePlate).toEqual(licensePlateMock)
      );

    const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/licensePlate/ABCD23`)
    expect(req.request.method).toBe("GET");
    req.flush(licensePlateMock);
  });
});
