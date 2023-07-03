import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { ProductListEditComponent } from './product-list-edit/product-list-edit.component';
import { ProductListListComponent } from './product-list-list/product-list-list.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ProductListEditComponent, ProductListListComponent],
})
export class ProductListModule {}
