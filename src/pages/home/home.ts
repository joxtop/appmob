import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AuthProvider } from '../../providers/auth/auth';
import { ProfilePage } from '../profile/profile';
import { IssueListPage } from '../issue-list/issue-list';
import { IssueMapPage } from '../issue-map/issue-map';
import { User } from '../../models/user';
import { TutoPage } from '../tuto/tuto';


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

  constructor(
    private auth: AuthProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage
  ) {
    // If the tuto is not yet done, redirect the user to the tuto page
    this.storage.get('tuto-done').then(done => {
      if (!done) {
        this.navCtrl.setRoot(TutoPage);
      }
    });

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
    this.navCtrl.push(page.component, {
      user: page.user,
      title: page.title
    });
  }
}
