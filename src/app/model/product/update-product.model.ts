import { ApiModel } from '../api.model';

export interface UpdateProductModel extends ApiModel {
  name: string;
  price: number;
  bought: boolean;
  categoryId: string;
}
