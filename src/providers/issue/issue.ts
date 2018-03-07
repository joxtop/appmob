import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { config } from '../../app/config';
import { Issue } from '../../models/issue';
import { map } from 'rxjs/operators';

/*
  Generated class for the IssueProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IssueProvider {

  constructor(public http: HttpClient) {
    console.log('Hello IssueProvider Provider');
  }

  // Get issue list
  getIssues(search?: string, sort?: [string], page?: number, pageSize?: number, image?: boolean): Observable<Issue[]> {

    const issuesUrl = `${config.apiUrl}/issues`;

    //Create new HttpParams
    let params = new HttpParams();
    params = search ? params.append('search', search) : params;
    if (sort) {
      sort.forEach((item) => {
        params.append('sort', item);
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

    console.log('getIssueById');

    const issueUrl = `${config.apiUrl}/issues/${id}`;

    //Create new HttpParams
    let params = new HttpParams();
    if (include) {
      include.forEach((item) => {
        params.append('include', item);
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

}
