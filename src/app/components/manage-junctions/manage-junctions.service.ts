import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {REST_API_HOST} from '../../globals';

@Injectable()
export class ManageJunctionsService {

    constructor(private http: HttpClient) {

    }

    getAllJunctions(): Promise<Object> {
        const url = REST_API_HOST + '/junction/all';
        return this.http.get(url).toPromise();
    }

}
