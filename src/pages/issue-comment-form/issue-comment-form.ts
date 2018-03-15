import { Component, Input, ViewChild } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { Issue } from '../../models/issue';
import { IssueComment } from '../../models/issue-comment';
import { IssueProvider } from '../../providers/issue/issue';

/**
 * Generated class for the IssueCommentFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'issue-comment-form',
  templateUrl: 'issue-comment-form.html',
})
export class IssueCommentForm {

  @ViewChild(NgForm)
  commentForm: NgForm;

  @Input()
  issue: Issue;

  newComment: IssueComment;
  subscribeError: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private issueService: IssueProvider,
    public events: Events
  ) {
    this.newComment = new IssueComment();
    this.subscribeError = false;
  }

  ngOnInit() {
    console.log('ngOnInit IssueCommentForm');
  }

  onCommentSubmit($event) {
    // Prevent default HTML form behavior.
    $event.preventDefault();

    // Do not do anything if the form is invalid.
    if (this.commentForm.invalid) {
      return;
    }

    this.subscribeError = false;

    console.log(this.newComment);

    this.issueService.createIssueComment(this.issue.id, this.newComment).subscribe(newComment => {
      console.log(newComment);
      this.events.publish('comment:created');
    }, err => {
      console.warn(`Could not create the comment: ${err.message}`);
    });
  }

}
