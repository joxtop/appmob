import { Component, Input, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
    private issueService: IssueProvider
  ) {}

  ngOnInit() {
    console.log('ngOnInit IssueComments');
    this.loadIssueComments();
  }

  private loadIssueComments() {
    this.issueService.getIssueCommentsById(this.issue.id).subscribe(issueComments => {
      this.comments = issueComments;
    });
  }

}
