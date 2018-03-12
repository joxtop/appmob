import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { latLng, MapOptions, marker, Marker, tileLayer } from 'leaflet';

import { CreateIssuePage } from '../create-issue/create-issue';
import { IssueProvider } from '../../providers/issue/issue';
import { Issue } from '../../models/issue';


/**
 * Generated class for the IssueMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-issue-map',
  templateUrl: 'issue-map.html',
})
export class IssueMapPage {
  issues: Issue[];
  mapOptions: MapOptions;

  mapMarkers: Marker[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private issueService: IssueProvider

  ) {
    const tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tileLayerOptions = { maxZoom: 18 };
    this.mapOptions = {
      layers: [
        tileLayer(tileLayerUrl, tileLayerOptions)
      ],
      zoom: 13,
      center: latLng(46.778186, 6.641524)
    };
    this.mapMarkers = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IssueMapPage');
    this.loadIssues();
  }

  private loadIssues(search?: string) {
    let searchedValue = search ? search : undefined;
    this.issueService.getIssues(['creator'], searchedValue, ['createdAt']).subscribe(issues => {
      this.issues = issues;
      issues.forEach((issue) => {
        this.mapMarkers.push(marker([issue.location.coordinates[1], issue.location.coordinates[1]]).bindTooltip(issue.description));
      });
      console.log(this.mapMarkers);
    });
  }

  openCreateIssuePage(){
    this.navCtrl.push(CreateIssuePage);
  }
}
