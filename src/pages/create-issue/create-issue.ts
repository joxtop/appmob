import {
  Component
} from '@angular/core';
import {
  NavController,
  NavParams
} from 'ionic-angular';
import {
  Geolocation
} from '@ionic-native/geolocation';

import {
  AuthProvider
} from '../../providers/auth/auth';
import {
  NewIssue
} from '../../models/new-issue';
import {
  IssueProvider
} from '../../providers/issue/issue';
import {
  IssueType
} from '../../models/issue-type';
import {
  QimgImage
} from '../../models/qimg-image';
import {
  PictureProvider
} from '../../providers/picture/picture';
import { NgForm } from '@angular/forms';
import { DetailsPage } from '../details/details';

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

  myAddress: string;
  newIssue: NewIssue;
  issueTypes: IssueType[];

  constructor(
    private auth: AuthProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private issueService: IssueProvider,
    private pictureService: PictureProvider
    //private formBuilder: FormBuilder
  ) {
    this.newIssue = {
      location: {
        coordinates: [0, 0],
        type: "Point"
      },
      description: '',
      tags: [],
      imageUrl: '',
      issueTypeHref: ''
    };
  }

  ionViewDidLoad() {
    this.issueService.getIssueTypes().subscribe(issueTypes => {
      this.issueTypes = issueTypes;
      console.log(issueTypes);
    });

    const geolocationPromise = this.geolocation.getCurrentPosition();
    geolocationPromise.then(position => {
      this.newIssue.location.coordinates[1] = position.coords.latitude;
      this.newIssue.location.coordinates[0] = position.coords.longitude;
      console.log(`User is at ${this.newIssue.location.coordinates[1]}, ${this.newIssue.location.coordinates[0]}`);
      this.issueService.reverseGeocode(this.newIssue.location.coordinates[1], this.newIssue.location.coordinates[0]).then((myAddress) => {
        this.myAddress = myAddress;
      }).catch((error) => {
        this.myAddress = 'Adresse inconnue';
      });
    }).catch(err => {
      console.warn(`Could not retrieve user position because: ${err.message}`);
    });
  }

  takePicture() {
    this.pictureService.takeAndUploadPicture().subscribe(picture => {
      this.newIssue.imageUrl = picture.url;
    }, err => {
      console.warn('Could not take picture', err);
    });
  }

  createIssue(form: NgForm) {
    if (form.valid) {
      this.issueService.createIssue(this.newIssue).subscribe(newIssue => {
        this.navCtrl.push(DetailsPage, {
          id: newIssue.id
        });
      }, err => {
        console.warn('Could not create the new issue', err);
      });
    }
  }
}
