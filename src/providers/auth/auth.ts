import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Storage } from '@ionic/storage';

import { config } from '../../app/config';
import { AuthRequest } from '../../models/auth-request';
import { AuthResponse } from '../../models/auth-response';
import { User } from '../../models/user';

/**
 * Authentication service for login/logout.
 */
@Injectable()
export class AuthProvider {

  private auth: AuthResponse;
  private initializationPromise: Promise<void>;

  constructor(private http: HttpClient, private storage: Storage) {
    this.initializationPromise = this.storage.get('auth').then(auth => {
      this.auth = auth;
    });
  }

  waitForInitialization(): Promise<void> {
    return this.initializationPromise;
  }

  isAuthenticated(): boolean {
    return !!this.auth;
  }

  getUser(): User {
    return this.auth ? this.auth.user : null;
  }

  getToken(): string {
    return this.auth ? this.auth.token : null;
  }

  async logIn(authRequest: AuthRequest): Promise<User> {
    this.auth = await this.http.post<AuthResponse>(`${config.apiUrl}/auth`, authRequest).toPromise();
    console.log(`User ${this.auth.user.name} logged in`);
    await this.storage.set('auth', this.auth);
    return this.auth.user;
  }

  async logOut(): Promise<void> {
    await this.storage.remove('auth');
    this.auth = null;
    console.log('User logged out');
  }

}
