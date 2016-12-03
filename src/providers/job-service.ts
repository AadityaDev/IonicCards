import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {APIConstant} from "../models/APIConstant";

@Injectable()
export class JobService {

  data: any;
  assignedJobsResponse:any;
  postedJobsResponse:any;
  headers: Headers;
  apiConstant:APIConstant;

  constructor(public http: Http) {
    this.apiConstant=new APIConstant();
    this.headers=new Headers();
    this.createAuthorizationHeaders(this.headers);
  }

  createAuthorizationHeaders(headers:Headers){
    headers.append(this.apiConstant.ContentType, 'application/json');
    headers.append(this.apiConstant.Authorization, 'c082d3c8893cea72c8d69792d1fdc7bc');
  }

  loadJobApplicants(){
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve=>{
      this.http.get('http://staging.myrefers.com/myrefers-api/employers/job-list?isCandidate=false',{headers:this.headers})
        .map(res=>res.json())
        .subscribe(data=>{
          this.data=data;
          resolve(this.data);
        });
    });
  }

  loadAssignedJobs(){
    if (this.assignedJobsResponse) {
      return Promise.resolve(this.assignedJobsResponse);
    }
    return new Promise(resolve=>{
      this.http.get('http://staging.myrefers.com/myrefers-api/employers/job-list?isCandidate=false&type=2',{headers:this.headers})
        .map(res=>res.json())
        .subscribe(data=>{
          this.assignedJobsResponse=data;
          resolve(this.assignedJobsResponse);
        });
    });
  }

  loadPostedJobs(){
    if (this.postedJobsResponse) {
      return Promise.resolve(this.postedJobsResponse);
    }
    return new Promise(resolve=>{
      this.http.get('http://staging.myrefers.com/myrefers-api/employers/job-list?isCandidate=false&type=3',{headers:this.headers})
        .map(res=>res.json())
        .subscribe(data=>{
          this.postedJobsResponse=data;
          resolve(this.postedJobsResponse);
        });
    });
  }

}
