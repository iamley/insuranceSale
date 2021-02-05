import { AddressEntity } from "./address.entity";

export interface OwnerEntity {
  key: string;
  first_name: string;
  first_surname: string;
  second_surname: string;
  gender: string;
  email: string;
  phone: string;
  address?: AddressEntity;
}
