import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { config } from '../../app/config';

/**
 * Generated class for the CreateIssuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-issue',
  templateUrl: 'create-issue.html',
})
export class CreateIssuePage {

  pictureData: string;
  address: string;
  newIssue: {
    location: {
      latitude: number,
      longitude: number
    },
    description: string,
    tags: string[],
    imageURL: string
  };

  new = {}
  logForm() {
    console.log(this.new)
  }
  

  constructor(
    private auth: AuthProvider,
    private httpClient: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private camera: Camera,
    private nativeGeocoder: NativeGeocoder,
    private formBuilder: FormBuilder
  ) {

    this.newIssue = {
      location: {
      latitude: 6.33333,
      longitude: 56.66093
    },
    description: 'test1',
    tags: ['testTag', '2emetag'],
    imageURL: 'unURL'
  }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateIssuePage');

    //const url = `${config.apiUrl}/issueTypes`;
    //this.httpClient.get(url).subscribe(issueTypes => {
    //  console.log('Issue types loaded', issueTypes);
    //});

    const geolocationPromise = this.geolocation.getCurrentPosition();
    geolocationPromise.then(position => {
      const coords = position.coords;
      console.log(`User is at ${coords.longitude}, ${coords.latitude}`);
      this.loadAddress(coords.longitude, coords.latitude);
      
    }).catch(err => {
      console.warn(`Could not retrieve user position because: ${err.message}`);
    });
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(pictureData => {
      this.pictureData = pictureData;
    }).catch(err => {
      console.warn(`Could not take picture because: ${err.message}`);
    });
  }
  private loadAddress(longitude, latitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude )
      .then((result: NativeGeocoderReverseResult) => { 
        this.address = `${result[0].thoroughfare} ${result[0].subThoroughfare}, ${result[0].postalCode} ${result[0].locality}`;
      })
      .catch((error: any) => console.log(error));
  }
  

}
