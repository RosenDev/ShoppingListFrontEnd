import { ApiModel } from '../api.model';
import { ProductModel } from '../product/product.model';

export interface ProductListModel extends ApiModel {
  name: string;
  userId: string;
  products: ProductModel[];
}
