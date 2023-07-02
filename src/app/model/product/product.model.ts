import { ApiModel } from '../api.model';
import { ProductCategoryModel } from '../product-category/product-category.model';

export interface ProductModel extends ApiModel {
  name: string;
  price: number;
  bought: boolean;
  category: ProductCategoryModel;
}
