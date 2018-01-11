import { Injectable } from '@angular/core';
import {REST_API_HOST} from "../../../common/globals";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ManageUsersService {

  constructor(private http: HttpClient) {

  }

  getAllUsersWithRoles(): Promise<Object>{
    let url = REST_API_HOST + '/user/all';
    return this.http.get(url).toPromise();
  }

}
