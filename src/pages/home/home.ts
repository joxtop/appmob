import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// TODO: import the authentication provider and login page.
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { HttpClient } from '@angular/common/http';

import { IssueMapPage } from '../issue-map/issue-map';
import {IssueListPage} from '../issue-list/issue-list';



export interface HomePageTab {
  title: string;
  icon: string;
  component: Function;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rootPage: any;

  constructor( // TODO: inject the authentication provider.
    private auth: AuthProvider,
    public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.rootPage = IssueMapPage
  }

  logOut() {
    this.auth.logOut();
  }

  openIssueListPage(){
    this.navCtrl.push(IssueListPage);
  }
  

}
