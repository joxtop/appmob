import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';
import { User } from '../../models/user';

/**
 * Generated class for the TutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tuto',
  templateUrl: 'tuto.html',
})
export class TutoPage {

  profile: User;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage
  ) {
    this.profile = this.navParams.data.user;
  }

  navHome() {
    this.storage.set('tuto-done', true);
    this.navCtrl.setRoot(HomePage);
  }
}
