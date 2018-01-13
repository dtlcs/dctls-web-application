import { Injectable } from '@angular/core';
import {restApiHost} from '../../../common/globals';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ManageJunctionsService {

  constructor(private http: HttpClient) {

  }

  getAllJunctions(): Promise<Object> {
    const url = restApiHost + '/junction/all';
    return this.http.get(url).toPromise();
  }

}
