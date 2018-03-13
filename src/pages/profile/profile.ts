import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../models/user';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile: User;
  role: {
    name: string,
    icon: string
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private auth: AuthProvider
  ) {}

  ionViewDidLoad() {  
    this.profile = this.navParams.data.user;
  }

  loadUserRole(user: User) {
    if(user.roles.indexOf('manager')) {
      this.role = {
        name: 'Gestionnaire',
        icon: 'build'
      };
    } else {
      this.role = {
        name: 'Citoyen',
        icon: 'person'
      };
    }
  }
}
