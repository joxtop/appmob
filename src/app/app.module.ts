import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { Camera } from '@ionic-native/camera';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateIssuePage } from '../pages/create-issue/create-issue';
import { IssueListPage } from '../pages/issue-list/issue-list';
import { IssueMapPage } from '../pages/issue-map/issue-map';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { AuthInterceptorProvider } from '../providers/auth-interceptor/auth-interceptor';

import { UserProvider } from '../providers/user/user';
import { IssueProvider } from '../providers/issue/issue';
import { DetailsPage } from './../pages/details/details';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateIssuePage,
    IssueListPage,
    IssueMapPage,
    LoginPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    LeafletModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateIssuePage,
    IssueListPage,
    IssueMapPage,
    LoginPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,

    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorProvider, multi: true },
    UserProvider,
    IssueProvider,
    Geolocation,
    NativeGeocoder,
    Camera

  ]
})
export class AppModule {}
