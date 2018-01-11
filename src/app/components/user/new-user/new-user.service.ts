import { Injectable } from '@angular/core';
import {REST_API_HOST} from "../../../common/globals";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewUserService {

  constructor(private http: HttpClient) {
  }

  getAllRoles(): Promise<Object>{
    let url = REST_API_HOST + '/role/all';
    return this.http.get(url).toPromise();
  }

  submitNewUser(user: any){
    let url = REST_API_HOST + '/user/add';
    return this.http.post(url, user);
  }

}
