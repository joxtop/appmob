import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { User } from '../../models/user';
import { config } from '../../app/config';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  getUserById(id: string): Observable<User> {

    console.log('getUserById');

    const userUrl = `${config.apiUrl}/users/${id}`;
    
    return this.http.get<User>(userUrl).pipe(
      map(user => {
        console.log(user);
        return user;
      })
    );
  }

}
