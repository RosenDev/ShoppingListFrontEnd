import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { PagedResponse } from '../model/paged-response.model';
import { ApiModel } from '../model/api.model';
import { Paging } from '../model/paging.model';
import { ApiResponse } from '../model/api-response.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

export class ServiceBase<TApiModel extends ApiModel> {
  constructor(
    protected serviceUrl: string,
    protected client: HttpClient,
    private router: Router
  ) {}

  public listEntites(paging: Paging): Observable<PagedResponse<TApiModel>> {
    const url = `${environment.baseUrl}/${this.serviceUrl}?page=${paging.page}&size=${paging.size}`;

    return this.client.get<PagedResponse<TApiModel>>(url).pipe(
      catchError(() => {
        this.router.navigate(['/']);
        return of();
      })
    );
  }

  public getEntityById(id: string): Observable<ApiResponse<TApiModel>> {
    const url = `${environment.baseUrl}/${this.serviceUrl}/${id}`;
    return this.client.get<ApiResponse<TApiModel>>(url);
  }

  public deleteEntity(id: string): Observable<ApiResponse<object>> {
    const url = `${environment.baseUrl}/${this.serviceUrl}/${id}`;

    return this.client.delete<ApiResponse<object>>(url);
  }
}
