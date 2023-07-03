import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceBase } from './service.base';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api-response.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserModel } from '../model/user/user.model';

@Injectable()
export class UsersService extends ServiceBase<UserModel> {
  constructor(client: HttpClient, router: Router) {
    super('Users', client, router);
  }

  public createUser(): Observable<ApiResponse<string>> {
    const url = `${environment.baseUrl}/${this.serviceUrl}`;
    return this.client.post<ApiResponse<string>>(url, null);
  }
}
