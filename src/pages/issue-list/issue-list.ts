import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IssueProvider } from '../../providers/issue/issue';
import { Issue } from '../../models/issue';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the IssueListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-issue-list',
  templateUrl: 'issue-list.html',
})
export class IssueListPage {


  issues: Issue[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private issueService: IssueProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IssueListPage');

    this.loadIssues();
  }

  onInput(event: any) {
    // set val to the value of the searchbar
    let searchedValue = event.target.value;

    // if the value is an empty string don't fetch the issues
    if (searchedValue && searchedValue.trim() != '') {
      this.loadIssues(searchedValue);
    }
  }

  onCancel() {
    this.loadIssues();
  }

  private loadIssues(search?: string) {
    let searchedValue = search ? search : undefined;
    this.issueService.getIssues(searchedValue).subscribe(issues => {
      this.issues = issues;
    });
  }

  goToDetails(id: string) {
    this.navCtrl.push(DetailsPage, {
      id: id
    });
  }

}
