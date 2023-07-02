import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductCategoryModel } from '../model/product-category/product-category.model';
import { ServiceBase } from './service.base';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api-response.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CreateProductCategoryModel } from '../model/product-category/create-product-category.model';
import { UpdateProductCategoryModel } from '../model/product-category/update-product-category.model';

@Injectable()
export class ProductCategoriesService extends ServiceBase<ProductCategoryModel> {
  constructor(client: HttpClient, router: Router) {
    super('ProductCategories', client, router);
  }

  public createCategory(
    createPlaylistModel: CreateProductCategoryModel
  ): Observable<ApiResponse<string>> {
    const url = `${environment.baseUrl}/${this.serviceUrl}`;

    return this.client.post<ApiResponse<string>>(url, {
      productCategory: createPlaylistModel,
    });
  }

  public updateCategory(
    updatePlaylistModel: UpdateProductCategoryModel
  ): Observable<ApiResponse<string>> {
    const url = `${environment.baseUrl}/${this.serviceUrl}`;

    return this.client.put<ApiResponse<string>>(url, {
      productCategory: updatePlaylistModel,
    });
  }
}
