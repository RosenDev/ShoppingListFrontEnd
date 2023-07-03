import { ApiModel } from '../api.model';

export interface UpdateProductModel extends ApiModel {
  name: string;
  price: number;
  categoryId: string;
}
