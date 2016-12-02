import {Component, ViewChild, ViewChildren, QueryList, NgModule} from '@angular/core';
import {NavController, List} from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {
    StackConfig,
    Stack,
    Card,
    ThrowEvent,
    DragEvent,
    SwingStackComponent,
    SwingCardComponent} from 'angular2-swing';
import {JobService} from "../../providers/job-service";
import {JobApplicationDetail} from "../../models/JobApplicationDetail";
import {MyRefersResponse} from "../../models/MyRefersResponse";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;
  @ViewChild(List) activeJobList:List;

  headers:Headers;
  data:MyRefersResponse;
  jobApplicationDetails:Array<JobApplicationDetail>;

  constructor(public navCtrl: NavController,public http: Http,public jobService:JobService) {
    this.load();

    this.headers=new Headers();
    this.headers.append('Content-Type','application/json');
    this.headers.append('Authorization','c082d3c8893cea72c8d69792d1fdc7bc');
    // this.headers.append('Content-Type','application/json');
    // this.headers.append('JsonStub-User-Key','b631b589-105b-4ed2-b8ba-ae3f9c486652');
    // this.headers.append('JsonStub-Project-Key','6cea1e1c-1fb0-4488-a665-9b444faacc51');

    console.log("Headers: "+this.headers);
    // this.http.get('http://staging.myrefers.com/myrefers-api/employers/job-list?isCandidate=false',{headers:this.headers})
    //   .map(data => data.json().results);
  }

  ngAfterViewInit() {
  }

  load(){
    this.jobService.loadJobApplicants()
      .then(data=>{
        this.data=data;
        console.log("Data: "+JSON.stringify(this.data));
        this.jobApplicationDetails=this.data.result;
        console.log("JobApplicationDetail: "+JSON.stringify(this.jobApplicationDetails));
      });
  }


}
