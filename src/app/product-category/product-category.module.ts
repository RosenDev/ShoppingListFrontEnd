import { NgModule } from '@angular/core';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';
import { SharedModule } from '../shared.module';
import { ProductCategoryEditComponent } from './product-category-edit/product-category-edit.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ProductCategoryListComponent, ProductCategoryEditComponent],
})
export class ProductCategoryModule {}
