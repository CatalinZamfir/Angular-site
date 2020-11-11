import {Address} from './Address';

export class HouseAdd{
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  address: Address = new Address();
}
