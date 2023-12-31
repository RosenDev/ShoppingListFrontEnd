import { Routes } from '@angular/router';
import { authenticatedChildGuard } from './guards/authenticated-child.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { productCategoryRoutes } from './product-category/product-category.routes';
import { userRoutes } from './user/user.routes';
import { productRoutes } from './product/product.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'product-categories',
    children: productCategoryRoutes,
    canActivateChild: [authenticatedChildGuard],
  },
  {
    path: 'products',
    children: productRoutes,
    canActivateChild: [authenticatedChildGuard],
  },
  // {
  //   path: 'product-lists',
  //   children: productListRoutes,
  //   canActivateChild: [authenticatedChildGuard],
  // },
  {
    path: 'users',
    children: userRoutes,
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
];
