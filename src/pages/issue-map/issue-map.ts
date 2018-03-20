import { Component } from '@angular/core';

import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import {CreateIssuePage} from '../create-issue/create-issue';
import { LatLng, latLng, MapOptions, marker, Marker, Map, tileLayer } from 'leaflet';

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
  userMarker: Marker;
  map: Map;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private issueService: IssueProvider,
    private geolocation: Geolocation

  ) {
    const tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tileLayerOptions = { maxZoom: 18 };
    this.mapOptions = {
      layers: [
        tileLayer(tileLayerUrl, tileLayerOptions)
      ],
      zoom: 14,
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
        this.mapMarkers.push(marker([issue.location.coordinates[1], issue.location.coordinates[0]]).bindTooltip(issue.description));
      });
      console.log(this.mapMarkers);
    });
  }

  openCreateIssuePage(){
    this.navCtrl.push(CreateIssuePage);
  }

  onMapReady(map: Map){
    this.map = map;
  }
  
}
