import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import {CreateIssuePage} from '../create-issue/create-issue';
import { latLng, MapOptions, marker, Marker, Map, tileLayer } from 'leaflet';



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
  getCenter(latitude, longitude) {
    
  }
  mapOptions: MapOptions;
  mapMarkers: Marker[];
  userMarker: Marker;
  map: Map;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private geolocation: Geolocation,
              public loadingCtrl: LoadingController) {
    
    const tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tileLayerOptions = { maxZoom: 18 };
  
  
    this.mapOptions = {
      layers: [
        tileLayer(tileLayerUrl, tileLayerOptions)
      ],
      zoom: 14,
      //center: latLng(46.778186, 6.641524)
    };

    this.mapMarkers = [
      marker([ 46.778186, 6.641524 ]).bindTooltip('Hello'),
      marker([ 46.780796, 6.647395 ]),
      marker([ 46.784992, 6.652267 ])
    ];
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`,
    });
    loading.present();
  }

  ionViewDidLoad() {
    this.presentLoadingDefault;
    console.log('ionViewDidLoad IssueMapPage');
    //afficher loading
    
    const geolocationPromise = this.geolocation.getCurrentPosition();
    geolocationPromise.then(position => {
      const coords = position.coords;
      console.log(`User is at ${coords.longitude}, ${coords.latitude}`);
      //this.userMarker = new Marker ([coords.latitude, coords.longitude]);
      //this.userMarker.addTo(this.map);
      //cacher loadinf
      this.mapOptions.center= latLng(coords.latitude, coords.longitude);
    }).catch(err => {
      //cacher loading
      this.mapOptions.center= latLng(46.778186, 6.641524);
      console.warn(`Could not retrieve user position because: ${err.message}`);
    });
  }
  onMapReady(map: Map) {
    this.map = map;
  }
  openCreateIssuePage(){
    this.navCtrl.push(CreateIssuePage);
  }
  
}
