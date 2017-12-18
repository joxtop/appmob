import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

import { AuthRequest } from '../../models/auth-request';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  authRequest: AuthRequest;
  @ViewChild(NgForm)
  form: NgForm;
  loginError: boolean;

  constructor(private auth: AuthProvider, private navCtrl: NavController) {
    this.authRequest = new AuthRequest();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onSubmit($event) {
    $event.preventDefault();

    if (this.form.invalid) {
      return;
    }

    this.loginError = false;

    this.auth.logIn(this.authRequest).subscribe(user => {
      console.log(`User ${user.name} successfully authenticated`);
      this.navCtrl.setRoot(HomePage);
    }, err => {
      this.loginError = true;
      console.log(`Authentication failed: ${err.message}`);
    });
  }

}
