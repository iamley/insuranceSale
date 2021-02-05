import { createAction, props } from '@ngrx/store';
import {
  LicensePlateEntity,
  LicensePlatePriceEntity,
  VehicleEntity,
  OwnerEntity,
  NotificationEnvelopeEntity
} from "@mfe-vehicle-insurance/shared/models";

export const getInformationFromTheLicensePlateByKey = createAction(
    '[License Plate] Get information from the license plate',
    props<{ key: string }>()
  );

export const getInformationFromTheLicensePlateSuccess = createAction(
  '[License Plate] Get information from the license plate success',
  props<{ licensePlate: LicensePlateEntity }>()
);

export const getInformationFromTheLicensePlateFailure = createAction(
  '[License Plate] Get information from the license plate failure',
  props<{ error: NotificationEnvelopeEntity }>()
);

export const getLicencePlatePriceByTypeVehicle = createAction(
  '[License PLate] get license plate price by type vehicle',
  props<{ typeVehicleId: number }>()
);

export const getLicencePlatePriceByTypeVehicleSuccess = createAction(
  '[License PLate] Get License Plate Price By Type Vehicle Success',
  props<{ licensePlatePrice: LicensePlatePriceEntity }>()
);

export const getLicencePlatePriceByTypeVehicleFailure = createAction(
  '[License PLate] Get License Plate Price By Type Vehicle Failure',
  props<{ error: NotificationEnvelopeEntity }>()
);

export const updateLicensePlateVehicleInfo = createAction(
  '[License Plate] Updated License Plate Vehicle Information',
  props<{ vehicle: VehicleEntity }>()
);

export const updateLicensePlateOwnerInfo = createAction(
  '[License Plate] Updated License Plate Owner Information',
  props<{ owner: OwnerEntity }>()
);

export const resetLicensePlateInfo = createAction(
  '[License Plate] Reset the License Plate Information'
);

export const resetLicensePlateMakeInfo = createAction(
  '[License Plate] Reset the License Plate Make Information'
);

export const resetLicensePlateModelInfo = createAction(
  '[License Plate] Reset the License Plate Model Information'
);
