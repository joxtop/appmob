import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AuthProvider } from '../../providers/auth/auth';
import { NewIssue } from '../../models/new-issue';
import { IssueProvider } from '../../providers/issue/issue';
import { IssueType } from '../../models/issue-type';

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

  startMap: (latitude: number, longitude: number) => void;
  pictureData: string;
  myAddress: string;
  newIssue: NewIssue;
  issueTypes: IssueType[];
  
  constructor(
    private auth: AuthProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private camera: Camera,
    private issueService: IssueProvider,
    //private formBuilder: FormBuilder
  ) {
    this.newIssue = {
      location: {
        latitude: 0,
        longitude: 0
      },
      description: '',
      tags: [],
      imageURL: '',
      issueType: ''
    };
    this.startMap = issueService.startExternalMap;
  }

  ionViewDidLoad() {
    this.issueService.getIssueTypes().subscribe(issueTypes => {
      this.issueTypes = issueTypes;
    });

    const geolocationPromise = this.geolocation.getCurrentPosition();
    geolocationPromise.then(position => {
      this.newIssue.location.latitude = position.coords.latitude;
      this.newIssue.location.longitude = position.coords.longitude;
      console.log(`User is at ${this.newIssue.location.latitude}, ${this.newIssue.location.longitude}`);
      this.issueService.reverseGeocode(this.newIssue.location.latitude, this.newIssue.location.longitude).then((myAddress) => {
        this.myAddress = myAddress;
      }).catch((error) => {
        this.myAddress = 'Adresse inconnue';
      });
      
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

  createIssue() {
    console.log(this.newIssue);
  }
}
