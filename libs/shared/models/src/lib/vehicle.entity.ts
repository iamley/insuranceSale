import { MakeVehicleEntity } from './make-vehicle.entity';
import { VehicleTypeEntity } from './vehicle-type.entity';
import { ModelVehicleEntity } from './model-vehicle.entity';
import { YearVehicleModelEntity } from './year-vehicle-model.entity';

export interface VehicleEntity {
  key?: string,
  make: MakeVehicleEntity;
  model: ModelVehicleEntity;
  type: VehicleTypeEntity;
  year: YearVehicleModelEntity
  engine_number: string;
}
