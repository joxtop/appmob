import { Component } from '@angular/core';
import { NavController, NavParams, FabContainer } from 'ionic-angular';

import { Issue } from '../../models/issue';
import { IssueProvider } from '../../providers/issue/issue';
import { User } from '../../models/user';
import { ProfilePage } from '../profile/profile';
import { AuthProvider } from '../../providers/auth/auth';
import { IssueAction } from '../../models/issue-action';

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

  profile: User;
  issue: Issue;
  issueAddress: string;
  loadState;
  startMap;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private issueService: IssueProvider,
    private auth: AuthProvider,
  ) {
    this.loadState = issueService.loadIssueState;
    this.startMap = issueService.startExternalMap;
  }

  ionViewDidLoad() {
    this.loadIssueDetails(this.navParams.data.id);

    this.auth.getUser().subscribe((user) => {
      this.profile = user;
    });
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

  changeStatus(newStatus: string, fab: FabContainer) {
    fab.close();
    let issueAction = new IssueAction();
    issueAction.reason = `ìssue ${newStatus}`;
    issueAction.type = newStatus;
    this.issueService.addIssueAction(this.issue.id, issueAction).subscribe(issue => {
      switch (issue.type) {
        case 'start':
          this.issue.state = 'inProgress';
          break;
        case 'reject':
          this.issue.state = 'rejected';
          break;
        case 'resolve':
          this.issue.state = 'resolved';
          break;
      }
    }, (err) => {
      console.warn("Couldn't change the issue status", err);
    });
  }
}
