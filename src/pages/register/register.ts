import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { NewUser } from '../../models/new-user';
import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  subscribeError: boolean;
  newUser: NewUser;

  /**
   * The register form.
   */
  @ViewChild(NgForm)
  registerForm: NgForm;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private userService: UserProvider
  ) {
    this.newUser = new NewUser();
    this.subscribeError = false;
  }

  /**
   * Called when the register form is submitted.
   */
  onSubmit($event) {

    // Prevent default HTML form behavior.
    $event.preventDefault();

    // Do not do anything if the form is invalid.
    if (this.registerForm.invalid) {
      return;
    }

    this.subscribeError = false;

    this.newUser.roles = ['citizen'];

    // Create a new user.
    this.userService.createUser(this.newUser).subscribe(user => {
      this.navCtrl.push(LoginPage, {
        info: "L'utilisateur à été créé avec succès"
      });
    }, err => {
      this.subscribeError = true;
      console.warn(`Could not create the user: ${err.message}`);
    });
  }

}
