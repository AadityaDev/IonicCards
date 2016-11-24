import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {JobService} from "../../providers/job-service";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public candidates:any;

  constructor(public navCtrl: NavController,public jobService:JobService) {
    this.loadCandidates();
  }

  loadCandidates(){
    // this.jobService.loadActiveJobList()
    //   .then(data=>{
    //     this.candidates=data.result;
    //     console.log(JSON.stringify(this.candidates));
    //   });
    this.jobService.loadJobApplicants()
      .then(data=>{
            this.candidates=data.result;
            console.log(JSON.stringify(this.candidates));
          });
  }

}
