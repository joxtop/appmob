import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { AuthProvider } from '../auth/auth';

/*
  Generated class for the AuthInterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthInterceptorProvider implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Retrieve AuthProvider at runtime from the injector.
    // (Otherwise there would be a circular dependency: AuthInterceptorProvider -> AuthProvider -> HttpClient -> AuthInterceptorProvider).
    const auth = this.injector.get(AuthProvider);

    // Get the bearer token (if any).
    const token = auth.getToken();

    // Add it to the request if it doesn't already have an Authorization header.
    if (token && !req.headers.has('Authorization')) {
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    // Perform the request.
    return next.handle(req);
  }

}
