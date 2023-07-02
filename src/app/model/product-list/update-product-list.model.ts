import { ApiModel } from '../api.model';

export interface UpdateProductListModel extends ApiModel {
  name: string;
  userId: string;
  productIds: string[];
}
