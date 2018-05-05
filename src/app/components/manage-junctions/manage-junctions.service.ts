import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {restApiHost} from "../../globals";

@Injectable()
export class ManageJunctionsService {

  constructor(private http: HttpClient) {

  }

  getAllJunctions(): Promise<Object> {
    const url = restApiHost + '/junction/all';
    return this.http.get(url).toPromise();
  }

}
