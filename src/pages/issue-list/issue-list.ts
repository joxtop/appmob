import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { config } from '../../app/config';

/**
 * Generated class for the IssueListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  templateUrl: 'issue-list.html'
})
export class IssueListPage {

  constructor(public http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.http.get(`${config.apiUrl}/issues`).subscribe(issues => {
      console.log(`Issues loaded`);
    });
  }

}
