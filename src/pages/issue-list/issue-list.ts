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
  filteredIssues: Issue[];
  loadState;
  pageTitle: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private issueService: IssueProvider
  ) {
    this.loadState = issueService.loadIssueState;
  }

  ionViewDidLoad() {
    this.loadIssues();
    this.pageTitle = this.navParams.data.title ? this.navParams.data.title : 'Liste des problèmes';
  }

  onInput(event: any) {
    // set val to the value of the searchbar
    let searchedValue = event.target.value;

    // if the value is an empty string don't fetch the issues
    if (searchedValue && searchedValue.trim() != '') {
      this.filterIssueList(searchedValue);
    } else {
      this.filteredIssues = this.issues;
    }
  }

  onCancel() {
    this.filteredIssues = this.issues;
  }

  private loadIssues(search?: string) {
    let searchedValue = search ? search : undefined;
    this.issueService.getIssues(['creator'], searchedValue, ['createdAt']).subscribe(issues => {
      if(this.navParams.data.user) {
        issues = issues.filter((issue) => issue.creator.name == this.navParams.data.user.name);
      }
      this.issues = issues;
      this.filteredIssues = issues;
    });
  }

  private filterIssueList(input: string) {
    this.filteredIssues = this.issues.filter((issue) => issue.description.toLowerCase().indexOf(input.toLowerCase())!==-1);
  }

  goToDetails(id: string) {
    this.navCtrl.push(DetailsPage, {
      id: id
    });
  }

}
