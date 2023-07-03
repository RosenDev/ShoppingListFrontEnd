import { NgModule } from '@angular/core';
import { ProductCategoriesService } from './product-categories.service';
import { ProductsService } from './products.service';
import { UsersService } from './users.service';
import { ProductListsService } from './products-lists.service';

@NgModule({
  providers: [
    ProductCategoriesService,
    ProductsService,
    UsersService,
    ProductListsService,
  ],
})
export class ServiceModule {}
