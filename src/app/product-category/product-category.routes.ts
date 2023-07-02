import { Routes } from '@angular/router';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';
import { ProductCategoryEditComponent } from './product-category-edit/product-category-edit.component';

export const productCategoryRoutes: Routes = [
  { path: '', component: ProductCategoryListComponent },
  { path: 'edit/:id', component: ProductCategoryEditComponent },
  { path: 'create', component: ProductCategoryEditComponent },
];
