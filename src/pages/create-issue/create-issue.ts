import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CreateIssuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  templateUrl: 'create-issue.html'
})
export class CreateIssuePage {

  constructor(private app: App, private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  logOut() {
    this.auth.logOut().then(() => {
      this.app.getRootNavs()[0].setRoot(LoginPage);
    });
  }

}
