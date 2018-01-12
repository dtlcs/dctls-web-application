import { Injectable } from '@angular/core';
import {REST_API_HOST} from "../../../common/globals";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ManageJunctionsService {

  constructor(private http: HttpClient) {

  }

  getAllJunctions(): Promise<Object>{
    let url = REST_API_HOST + '/junction/all';
    return this.http.get(url).toPromise();
  }

}
