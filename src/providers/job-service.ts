import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {APIConstant} from "../models/APIConstant";

@Injectable()
export class JobService {

  data: any;
  headers: Headers;
  apiConstant:APIConstant;

  constructor(public http: Http) {
    this.apiConstant=new APIConstant();
    this.headers=new Headers();
    this.createAuthorizationHeaders(this.headers);
  }

  createAuthorizationHeaders(headers:Headers){
    // headers.append('Access-Control-Allow-Origin:','http://jsonstub.com');
    // headers.append(this.apiConstant.ContentType,'application/json');
    // headers.append(this.apiConstant.JsonStubProjectKey,'6cea1e1c-1fb0-4488-a665-9b444faacc51');
    // headers.append(this.apiConstant.JsonStubUserKey,'b631b589-105b-4ed2-b8ba-ae3f9c486652')
    headers.append(this.apiConstant.ContentType, 'application/json');
    headers.append(this.apiConstant.Authorization, 'c082d3c8893cea72c8d69792d1fdc7bc');
    headers.append(this.apiConstant.Accept,'application/vnd.myrefers.v0+json');
  }

  loadJobApplicants(){
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve=>{
      this.http.get('http://jsonstub.com/job-applications-ajax')
        .map(res=>res.json())
        .subscribe(data=>{
          this.data=data.result;
          resolve(this.data);
        });
    });
  }

  loadActiveJobList(){
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve=>{
      this.http.get('http://localhost:8180/myrefers-api/employers/jobs')
        .map(res=>res.json())
        .subscribe(data=>{
          this.data=data.result;
          resolve(this.data);
        });
    });
  }
}
