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
import { FormsModule } from '@angular/forms';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import {IonTagsInputModule} from "ionic-tags-input";

import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';
import { AuthInterceptorProvider } from '../providers/auth-interceptor/auth-interceptor';
import { UserProvider } from '../providers/user/user';
import { IssueProvider } from '../providers/issue/issue';
import { HomePage } from '../pages/home/home';
import { CreateIssuePage } from '../pages/create-issue/create-issue';
import { IssueListPage } from '../pages/issue-list/issue-list';
import { IssueMapPage } from '../pages/issue-map/issue-map';
import { LoginPage } from '../pages/login/login';
import { DetailsPage } from './../pages/details/details';
import { ProfilePage } from '../pages/profile/profile';
import { PictureProvider } from '../providers/picture/picture';
import { IssueComments } from '../pages/issue-comments/issue-comments';
import { RegisterPage } from '../pages/register/register';
import { TutoPage } from '../pages/tuto/tuto';
import { IssueCommentForm } from '../pages/issue-comment-form/issue-comment-form';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateIssuePage,
    IssueListPage,
    IssueMapPage,
    LoginPage,
    DetailsPage,
    ProfilePage,
    IssueComments,
    RegisterPage,
    TutoPage,
    IssueCommentForm
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    LeafletModule.forRoot(),
    FormsModule,
    IonTagsInputModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateIssuePage,
    IssueListPage,
    IssueMapPage,
    LoginPage,
    DetailsPage,
    ProfilePage,
    IssueComments,
    RegisterPage,
    TutoPage,
    IssueCommentForm
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
    Camera,
    LaunchNavigator,
    PictureProvider,
  ]
})
export class AppModule {}
