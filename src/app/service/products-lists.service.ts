import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceBase } from './service.base';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api-response.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProductListModel } from '../model/product-list/product-list.model';
import { CreateProductListModel } from '../model/product-list/create-product-list.model';
import { UpdateProductListModel } from '../model/product-list/update-product-list.model';

@Injectable()
export class ProductListsService extends ServiceBase<ProductListModel> {
  constructor(client: HttpClient, router: Router) {
    super('ProductLists', client, router);
  }

  public createProduct(
    createProductListModel: CreateProductListModel
  ): Observable<ApiResponse<string>> {
    const url = `${environment.baseUrl}/${this.serviceUrl}`;

    return this.client.post<ApiResponse<string>>(url, {
      productList: createProductListModel,
    });
  }

  public updateProductList(
    updateProductListModel: UpdateProductListModel
  ): Observable<ApiResponse<string>> {
    const url = `${environment.baseUrl}/${this.serviceUrl}`;

    return this.client.put<ApiResponse<string>>(url, {
      productList: updateProductListModel,
    });
  }
}
