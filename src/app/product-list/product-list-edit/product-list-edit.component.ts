import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateProductListModel } from 'src/app/model/product-list/create-product-list.model';
import { UpdateProductListModel } from 'src/app/model/product-list/update-product-list.model';
import { ProductListsService } from 'src/app/service/products-lists.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-list-edit.component.html',
})
export class ProductListEditComponent implements OnInit {
  private productId = '';

  public title = '';
  public productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productListsService: ProductListsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required]),
    });
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      if (x.has('id')) {
        this.title = 'Update Product List';
        this.productId = <string>x.get('id');
        this.productListsService.getEntityById(this.productId).subscribe(x => {
          this.productForm.patchValue(x.result);
        });
      } else {
        this.title = 'Create Product List';
      }
    });
  }

  public submit(): void {
    if (this.productForm.invalid) {
      return;
    }

    if (!this.productId) {
      const productListModel = <CreateProductListModel>(
        Object.assign({}, this.productForm.value)
      );

      this.productListsService
        .createProduct(productListModel)
        .subscribe(success => {
          if (success.result) {
            this.router.navigate(['product-lists']);
          }
        });
    } else {
      const productListModel = <UpdateProductListModel>(
        Object.assign({}, { ...this.productForm.value, id: this.productId })
      );

      this.productListsService
        .updateProductList(productListModel)
        .subscribe(success => {
          if (success.result) {
            this.router.navigate(['product-lists']);
          }
        });
    }
  }
}
