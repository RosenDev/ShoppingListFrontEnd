import { Routes } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';

export const productRoutes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'edit/:id', component: ProductEditComponent },
  { path: 'create', component: ProductEditComponent },
];
