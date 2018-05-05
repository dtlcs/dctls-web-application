import {Injectable} from '@angular/core';
import {restApiHost} from "../../globals";
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ManageUsersService {

  private selectedUserSource = new BehaviorSubject<Object>({});
  selectedUser = this.selectedUserSource.asObservable();

  constructor(private http: HttpClient) {

  }

  changeSelectedUser(user: Object) {
    this.selectedUserSource.next(user)
  }

  getAllUsersWithRoles(): Promise<Object> {
    let url = restApiHost + '/user/all';
    return this.http.get(url).toPromise();
  }

}
