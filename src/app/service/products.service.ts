import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceBase } from './service.base';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api-response.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../model/product/product.model';
import { UpdateProductModel } from '../model/product/update-product.model';
import { CreateProductModel } from '../model/product/create-product.model';

@Injectable()
export class ProductsService extends ServiceBase<ProductModel> {
  constructor(client: HttpClient, router: Router) {
    super('Products', client, router);
  }

  public createProduct(
    createProductModel: CreateProductModel
  ): Observable<ApiResponse<string>> {
    const url = `${environment.baseUrl}/${this.serviceUrl}`;

    return this.client.post<ApiResponse<string>>(url, {
      product: createProductModel,
    });
  }

  public updateProduct(
    updateProductModel: UpdateProductModel
  ): Observable<ApiResponse<string>> {
    const url = `${environment.baseUrl}/${this.serviceUrl}`;

    return this.client.put<ApiResponse<string>>(url, {
      product: updateProductModel,
    });
  }
}
