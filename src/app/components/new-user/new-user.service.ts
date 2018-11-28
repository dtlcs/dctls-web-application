import {Injectable} from '@angular/core';
import {REST_API_HOST} from '../../globals';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NewUserService {

    constructor(private http: HttpClient) {
    }

    getAllRoles(): Promise<Object> {
        const url = REST_API_HOST + '/role/all';
        return this.http.get(url).toPromise();
    }

    submitNewUser(user: any) {
        const url = REST_API_HOST + '/user/add';
        return this.http.post(url, user);
    }

}
