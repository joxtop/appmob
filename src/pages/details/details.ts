import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';

import { Issue } from '../../models/issue';
import { IssueProvider } from '../../providers/issue/issue';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private issueService: IssueProvider,
    private nativeGeocoder: NativeGeocoder
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
    this.loadIssueDetails(this.navParams.data.id);
  }

  private loadIssueDetails(id: string) {
    this.issueService.getIssueById(id).subscribe(issue => {
      console.log(issue);
      this.issue = issue;
      this.loadIssueAddress(issue);
    });
  }

  private loadIssueAddress(issue: Issue) {
    this.nativeGeocoder.reverseGeocode(issue.location.coordinates[1], issue.location.coordinates[0])
      .then((result: NativeGeocoderReverseResult) => {
        this.issueAddress = `${result[0].thoroughfare} ${result[0].subThoroughfare}, ${result[0].postalCode} ${result[0].locality}`;
      })
      .catch((error: any) => console.log(error));
  }

}
