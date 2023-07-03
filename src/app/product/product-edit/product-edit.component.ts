import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateProductModel } from 'src/app/model/product/create-product.model';
import { UpdateProductModel } from 'src/app/model/product/update-product.model';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
})
export class ProductEditComponent implements OnInit {
  private productId = '';

  public title = '';
  public productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
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
        this.title = 'Update Product';
        this.productId = <string>x.get('id');
        this.productsService.getEntityById(this.productId).subscribe(x => {
          this.productForm.patchValue({
            name: x.result.name,
            price: x.result.price,
            categoryId: x.result.category.id,
          });
        });
      } else {
        this.title = 'Create Product';
      }
    });
  }

  public submit(): void {
    if (this.productForm.invalid) {
      return;
    }

    if (!this.productId) {
      const productModel = <CreateProductModel>(
        Object.assign({}, this.productForm.value)
      );

      this.productsService.createProduct(productModel).subscribe(success => {
        if (success.result) {
          this.router.navigate(['products']);
        }
      });
    } else {
      const productModel = <UpdateProductModel>(
        Object.assign({}, { ...this.productForm.value, id: this.productId })
      );

      this.productsService.updateProduct(productModel).subscribe(success => {
        if (success.result) {
          this.router.navigate(['products']);
        }
      });
    }
  }
}
