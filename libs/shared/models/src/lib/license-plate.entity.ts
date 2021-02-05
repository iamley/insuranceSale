import { OwnerEntity } from './owner.entity';
import { VehicleEntity } from './vehicle.entity';

export interface LicensePlateEntity {
  key: string;
  owner: OwnerEntity;
  vehicle: VehicleEntity;
  paymentMethod?: string;
}
