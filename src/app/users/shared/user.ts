import {Address} from './address';

export class User {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: Address = new Address();
}
