import { Component, Input } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

import { Issue } from '../../models/issue';
import { IssueProvider } from '../../providers/issue/issue';
import { IssueComment } from '../../models/issue-comment';

/**
 * Generated class for the IssueComments page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'issue-comments',
  templateUrl: 'issue-comments.html',
})
export class IssueComments {

  @Input()
  issue: Issue;
  comments: IssueComment[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private issueService: IssueProvider,
    public events: Events
  ) {
    events.subscribe('comment:created', () => {
      this.loadIssueComments();
    });
  }

  ngOnInit() {
    this.loadIssueComments();
  }

  private loadIssueComments() {
    this.issueService.getIssueCommentsById(this.issue.id).subscribe(issueComments => {
      this.comments = issueComments.reverse();
    });
  }

}
