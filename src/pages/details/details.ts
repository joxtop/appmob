import {
  Component
} from '@angular/core';
import {
  NavController,
  NavParams
} from 'ionic-angular';

import {
  Issue
} from '../../models/issue';
import {
  IssueProvider
} from '../../providers/issue/issue';
import {
  UserProvider
} from '../../providers/user/user';
import {
  User
} from '../../models/user';
import {
  ProfilePage
} from '../profile/profile';

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
  loadState;
  startMap;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private issueService: IssueProvider
  ) {
    this.loadState = issueService.loadIssueState;
    this.startMap = issueService.startExternalMap;
  }

  ionViewDidLoad() {
    this.loadIssueDetails(this.navParams.data.id);
  }

  private loadIssueDetails(id: string) {
    this.issueService.getIssueById(id, ['actions', 'assignee', 'creator', 'issueType']).subscribe(issue => {
      this.issue = issue;
      this.issueService.reverseGeocode(issue.location.coordinates[1], issue.location.coordinates[0]).then((issueAddress) => {
        this.issueAddress = issueAddress;
      }).catch((error) => {
        this.issueAddress = 'Adresse inconnue';
      });
    });
  }

  goToUser(user: User) {
    this.navCtrl.push(ProfilePage, {
      user: user
    });
  }
}
