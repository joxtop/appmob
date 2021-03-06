import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

import { config } from '../../app/config';
import { Issue } from '../../models/issue';
import { NewIssue } from '../../models/new-issue';
import { IssueType } from '../../models/issue-type';
import { IssueComment } from '../../models/issue-comment';
import { IssueAction } from '../../models/issue-action';

/*
  Generated class for the IssueProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IssueProvider {

  constructor(
    private http: HttpClient, 
    private geocoder: NativeGeocoder
  ) {}

  // Get issue list
  getIssues(include?:string[], search?: string, sort?: [string], page?: number, pageSize?: number, image?: boolean): Observable<Issue[]> {

    const issuesUrl = `${config.apiUrl}/issues`;

    //Create new HttpParams
    let params = new HttpParams();
    params = search ? params.append('search', search) : params;
    if (include) {
      include.forEach((item) => {
        params = params.append('include', item);
      });
    }
    if (sort) {
      sort.forEach((item) => {
        params = params.append('sort', item);
      });
    }
    params = page ? params.append('page', page.toString()) : params;
    params = pageSize ? params.append('pageSize', pageSize.toString()) : params;
    params = image ? params.append('image', image.toString()) : params;

    const httpOptions = {
      params: params,
    };
    
    return this.http.get<Issue[]>(issuesUrl, httpOptions).pipe(
      map(issues => {
        console.log(issues);
        return issues;
      })
    );
  }

  getIssueById(id: string, include?:string[]): Observable<Issue> {
    const issueUrl = `${config.apiUrl}/issues/${id}`;

    //Create new HttpParams
    let params = new HttpParams();
    if (include) {
      include.forEach((item) => {
        params = params.append('include', item);
      });
    }

    const httpOptions = {
      params: params,
    };
    
    return this.http.get<Issue>(issueUrl, httpOptions).pipe(
      map(issue => {
        console.log(issue);
        return issue;
      })
    );
  }

  loadIssueState(issue: Issue): any {
    let state;
    switch (issue.state) {
      case 'new':
        state = {
          name: 'Nouveau',
          icon: 'star'
        };
        break;
      case 'inProgress':
        state = {
          name: 'En cours',
          icon: 'build'
        };
        break;
      case 'rejected':
        state = {
          name: 'Rejeté',
          icon: 'trash'
        };
        break;
      case 'resolved':
        state = {
          name: 'Résolu',
          icon: 'checkmark-circle-outline'
        };
        break;
    }
    return state;
  }

  reverseGeocode(latitude: number, longitude: number): Promise<string> {
    return this.geocoder.reverseGeocode(latitude, longitude)
      .then((result: NativeGeocoderReverseResult) => {
        if(!result[0].postalCode || !result[0].locality) {
          throw "Address unknown";
        }
        let address = result[0].thoroughfare && result[0].subThoroughfare ? `${result[0].thoroughfare} ${result[0].subThoroughfare}, ` : '';
        address += `${result[0].postalCode} ${result[0].locality}`;
        return address;
      })
      .catch((error: any) => {
        console.log(error);
        return Promise.reject("Error geocoding");
      });
  }

  startExternalMap(latitude: number, longitude: number) {
    const launchNavigator = new LaunchNavigator();
    const options: LaunchNavigatorOptions = {
      destinationName: name,
      transportMode: "driving",
    };    

    launchNavigator.navigate([latitude, longitude], options).then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
    );

  }

  getIssueTypes(page?: number, pageSize?: number): Observable<IssueType[]> {
    const issueTypesUrl = `${config.apiUrl}/issueTypes`;

    //Create new HttpParams
    let params = new HttpParams();
    params = page ? params.append('page', page.toString()) : params;
    params = pageSize ? params.append('pageSize', pageSize.toString()) : params;
    
    const httpOptions = {
      params: params,
    };

    return this.http.get<IssueType[]>(issueTypesUrl, httpOptions).pipe(
      map(issueTypes => {
        console.log(issueTypes);
        return issueTypes;
      })
    );
  }

  createIssue(newIssue: NewIssue): Observable<Issue> {
    const newIssueUrl = `${config.apiUrl}/issues`;

    return this.http.post<Issue>(newIssueUrl, newIssue).pipe(
      map(issue => {
        console.log(issue);
        return issue;
      })
    );
  }

  getIssueCommentsById(id: string): Observable<IssueComment[]> {
    const issueCommentsUrl = `${config.apiUrl}/issues/${id}/comments?include=author`;

    return this.http.get<IssueComment[]>(issueCommentsUrl).pipe(
      map(issueComments => {
        console.log(issueComments);
        return issueComments;
      })
    );
  }

  createIssueComment(issueId: string, newComment: IssueComment): Observable<IssueComment> {
    const newIssueCommentUrl = `${config.apiUrl}/issues/${issueId}/comments`;

    return this.http.post<IssueComment>(newIssueCommentUrl, newComment).pipe(
      map(comment => {
        console.log(comment);
        return comment;
      })
    );
  }

  addIssueAction(issueId: string, issueAction: IssueAction): Observable<any> {
    const editIssueUrl = `${config.apiUrl}/issues/${issueId}/actions`;
    
    return this.http.post<any>(editIssueUrl, issueAction).pipe(
      map(issue => {
        console.log(issue);
        return issue;
      })
    );
  }
}
