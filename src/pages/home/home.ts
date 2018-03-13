import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

import { ProfilePage } from '../profile/profile';
import { IssueListPage } from '../issue-list/issue-list';
import { IssueMapPage } from '../issue-map/issue-map';
import { User } from '../../models/user';



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
  pages: Array<{title: string, component: any, user?: User}>;
  profile: User;

  constructor( // TODO: inject the authentication provider.
    private auth: AuthProvider,
    public navCtrl: NavController,
    public navParams: NavParams) 
  {
    // set the root page
    this.rootPage = IssueMapPage;

    this.auth.getUser().subscribe((user) => {
      this.profile = user;

      // set our app's pages
      this.pages = [
        { title: 'Mon profile', component: ProfilePage, user: this.profile },
        { title: 'Problèmes reportés', component: IssueListPage, user: this.profile },
        { title: 'Liste des problèmes', component: IssueListPage }
      ];
    });
  }

  logOut() {
    this.auth.logOut();
  }

  openPage(page: any) {
    console.log(page);
    this.navCtrl.push(page.component, {
      user: page.user,
      title: page.title
    });
  }
}
