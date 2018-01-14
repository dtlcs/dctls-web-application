import { Injectable } from '@angular/core';
import {restApiHost} from "../../../globals";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewUserService {

  constructor(private http: HttpClient) {
  }

  getAllRoles(): Promise<Object>{
    let url = restApiHost + '/role/all';
    return this.http.get(url).toPromise();
  }

  submitNewUser(user: any){
    let url = restApiHost + '/user/add';
    return this.http.post(url, user);
  }

}
