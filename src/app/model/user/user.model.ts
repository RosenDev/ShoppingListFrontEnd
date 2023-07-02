import { ProductListModel } from '../product-list/product-list.model';

export interface UserModel {
  username: string;
  productLists: ProductListModel[];
}
