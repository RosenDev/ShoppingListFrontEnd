import { Routes } from '@angular/router';
import { ProductListEditComponent } from './product-list-edit/product-list-edit.component';
import { ProductListListComponent } from './product-list-list/product-list-list.component';

export const productListRoutes: Routes = [
  { path: '', component: ProductListListComponent },
  { path: 'edit/:id', component: ProductListEditComponent },
  { path: 'create', component: ProductListEditComponent },
];
