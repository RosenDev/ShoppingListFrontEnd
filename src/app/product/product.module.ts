import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ProductEditComponent, ProductListComponent],
})
export class ProductModule {}
