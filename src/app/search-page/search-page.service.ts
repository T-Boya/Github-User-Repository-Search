import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchPageService {
  private query:string;
  private API_KEY: string = environment.GITHUB_API_KEY;
  private API_URL: string = environment.GITHUB_API_URL;
  private URL_SUFFIX: string = '?access_token=' + this.API_KEY;
  private URL_REPOS: string = '/repos'

  constructor(private _http: Http) { }

  getUser(query) {
  // return this._http.get(this.API_URL + query + this.URL_SUFFIX).map(res => res.json()); API request for general user information
  return this._http.get(this.API_URL + query + this.URL_REPOS + this.URL_SUFFIX).map(res => res.json());
  }
}
