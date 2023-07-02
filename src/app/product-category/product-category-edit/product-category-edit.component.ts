import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateProductCategoryModel } from 'src/app/model/product-category/create-product-category.model';
import { UpdateProductCategoryModel } from 'src/app/model/product-category/update-product-category.model';
import { ProductCategoriesService } from 'src/app/service/product-categories.service';

@Component({
  selector: 'app-product-category-edit',
  templateUrl: './product-category-edit.component.html',
})
export class ProductCategoryEditComponent implements OnInit {
  private productCategoryId = '';

  public title = '';
  public productCategoryForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: ProductCategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productCategoryForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      isPublic: new FormControl(false, [Validators.required]),
      trackIds: new FormControl('', [Validators.required]),
      albumId: new FormControl('', [Validators.required]),
    });
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      if (x.has('id')) {
        this.title = 'Update Product Category';
        this.productCategoryId = <string>x.get('id');
        this.categoriesService
          .getEntityById(this.productCategoryId)
          .subscribe(x => {
            this.productCategoryForm.patchValue(x.result);
          });
      } else {
        this.title = 'Create Product Category';
      }
    });
  }

  public submit(): void {
    if (this.productCategoryForm.invalid) {
      return;
    }

    if (!this.productCategoryId) {
      const categoryModel = <CreateProductCategoryModel>(
        Object.assign({}, this.productCategoryForm.value)
      );
      this.categoriesService
        .createCategory(categoryModel)
        .subscribe(success => {
          if (success.result) {
            this.router.navigate(['categories']);
          }
        });
    } else {
      const categoryModel = <UpdateProductCategoryModel>(
        Object.assign(
          {},
          { ...this.productCategoryForm.value, id: this.productCategoryId }
        )
      );

      this.categoriesService
        .updateCategory(categoryModel)
        .subscribe(success => {
          if (success.result) {
            this.router.navigate(['categories']);
          }
        });
    }
  }
}
