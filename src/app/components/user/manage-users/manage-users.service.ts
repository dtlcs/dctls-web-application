import { Injectable } from '@angular/core';
import {restApiHost} from "../../../globals";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ManageUsersService {

  constructor(private http: HttpClient) {

  }

  getAllUsersWithRoles(): Promise<Object>{
    let url = restApiHost + '/user/all';
    return this.http.get(url).toPromise();
  }

}
