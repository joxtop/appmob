import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { config } from '../../app/config';

/**
 * Generated class for the CreateIssuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-issue',
  templateUrl: 'create-issue.html',
})
export class CreateIssuePage {

  constructor(
    private auth: AuthProvider,
    private httpClient: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateIssuePage');

    const url = `${config.apiUrl}/issueTypes`;
    this.httpClient.get(url).subscribe(issueTypes => {
      console.log('Issue types loaded', issueTypes);
    });
  }

  logOut() {
    this.auth.logOut();
  }

}
