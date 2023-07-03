import { ApiModel } from '../api.model';
import { ProductCategoryModel } from '../product-category/product-category.model';

export interface ProductModel extends ApiModel {
  name: string;
  price: number;
  category: ProductCategoryModel;
}
