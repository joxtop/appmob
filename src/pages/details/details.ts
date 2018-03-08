import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';

import { Issue } from '../../models/issue';
import { IssueProvider } from '../../providers/issue/issue';
import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  issue: Issue;
  issueAddress: string;
  createdBy: User;
  state: {
    name: string, 
    icon: string
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private issueService: IssueProvider,
    private userService: UserProvider,
    private nativeGeocoder: NativeGeocoder
  ) {}

  ionViewDidLoad() {
    this.loadIssueDetails(this.navParams.data.id);
  }

  private loadIssueDetails(id: string) {
    this.issueService.getIssueById(id).subscribe(issue => {
      this.issue = issue;
      this.loadIssueAddress(issue);
      this.loadUserDetails(issue.creatorHref.substring(issue.creatorHref.length-24, issue.creatorHref.length));
      this.loadIssueState(issue);
    });
  }

  private loadUserDetails(id: string) {
    this.userService.getUserById(id).subscribe(user => {
      this.createdBy = user;
    });
  }

  private loadIssueAddress(issue: Issue) {
    this.nativeGeocoder.reverseGeocode(issue.location.coordinates[1], issue.location.coordinates[0])
      .then((result: NativeGeocoderReverseResult) => {
        this.issueAddress = `${result[0].thoroughfare} ${result[0].subThoroughfare}, ${result[0].postalCode} ${result[0].locality}`;
      })
      .catch((error: any) => console.log(error));
  }

  loadIssueState(issue: Issue) {
    console.log('loadIssueState');
    switch (issue.state) {
      case 'new':
        this.state = {
          name: 'Nouveau',
          icon: 'star'
        };
        break;
      case 'inProgress':
        this.state = {
          name: 'En cours',
          icon: 'build'
        };
        break;
      case 'rejected':
        this.state = {
          name: 'Rejeté',
          icon: 'trash'
        };
        break;
      case 'canceled':
        this.state = {
          name: 'Supprimé',
          icon: 'close-circle'
        };
        break;
      case 'completed':
        this.state = {
          name: 'Résolu',
          icon: 'checkmark-circle'
        };
        break;
    }
    console.log(this.state);
  }

}
