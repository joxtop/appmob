import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Observable, ReplaySubject } from 'rxjs/Rx';

import { AuthRequest } from '../../models/auth-request';
import { AuthResponse } from '../../models/auth-response';
import { User } from '../../models/user';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private currentAuthSubject: ReplaySubject<AuthResponse>;

  constructor(private http: HttpClient, private storage: Storage) {

    this.currentAuthSubject = new ReplaySubject(1);

    this.storage.get('auth').then(auth => {
      this.currentAuthSubject.next(auth);
    });
  }

  isAuthenticated(): Observable<boolean> {
    return this.currentAuthSubject.first().map(auth => !!auth);
  }

  getUser(): Observable<User> {
    return this.currentAuthSubject.map(auth => auth ? auth.user : undefined);
  }

  getToken(): Observable<string> {
    return this.currentAuthSubject.map(auth => auth ? auth.token : undefined);
  }

  logIn(authRequest: AuthRequest): Observable<User> {
    return this.http.post<AuthResponse>('https://comem-citizen-engagement.herokuapp.com/api/auth', authRequest).switchMap(authResponse => {
      this.currentAuthSubject.next(authResponse);
      return this.save(authResponse).map(() => authResponse.user);
    });
  }

  logOut(): Observable<void> {

    const promise = this.storage.remove('auth').then(() => {
      this.currentAuthSubject.next(undefined);
      console.log('User logged out');
    });

    return Observable.fromPromise(promise);
  }

  private save(auth: AuthResponse): Observable<void> {
    return Observable.fromPromise(this.storage.set('auth', auth));
  }

}
