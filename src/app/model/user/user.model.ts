import { ApiModel } from '../api.model';
import { ProductListModel } from '../product-list/product-list.model';

export interface UserModel extends ApiModel {
  username: string;
  productLists: ProductListModel[];
}
