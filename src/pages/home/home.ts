import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CreateIssuePage } from '../create-issue/create-issue';
import { IssueMapPage } from '../issue-map/issue-map';
import { IssueListPage } from '../issue-list/issue-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /**
   * Application tabs.
   *
   * This is a list of objects representing tabs.
   * Each tab has a `title` and `icon` to customize the tab,
   * and the `component` property to determine which page to display.
   */
  tabs: any[];

  constructor(public navCtrl: NavController) {
    this.tabs = [
      { title: 'New Issue', icon: 'add', component: CreateIssuePage },
      { title: 'Issue Map', icon: 'map', component: IssueMapPage },
      { title: 'Issue List', icon: 'list', component: IssueListPage }
    ];
  }

}
