import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Http} from "@angular/http";
import "rxjs/Rx";
import {JobService} from "../../providers/job-service";
import {JobApplicationDetail} from "../../models/JobApplicationDetail";
import {MyRefersResponse} from "../../models/MyRefersResponse";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  data: MyRefersResponse;
  jobApplicationDetailsPre: Array<JobApplicationDetail>;
  jobApplicationDetails: Array<JobApplicationDetail>;
  activeJobsSize: number;
  visibleItem: number;
  showActiveText: string;
  /*Assigned to me*/
  assignedJobApplications: MyRefersResponse;
  jobApplicationDetailsAssignedPre: Array<JobApplicationDetail>;
  jobApplicationDetailsAssigned: Array<JobApplicationDetail>;
  assignedJobsSize: number;
  showAssignedText: string;
  /*Assigned to me*/
  postedJobApplications: MyRefersResponse;
  jobApplicationDetailsPostedPre: Array<JobApplicationDetail>;
  jobApplicationDetailsPosted: Array<JobApplicationDetail>;
  postedJobsSize: number;
  showPostedText: string;

  constructor(public navCtrl: NavController, public http: Http, public jobService: JobService) {
    this.load();
    this.activeJobsSize = 0;
    this.assignedJobsSize = 0;
    this.postedJobsSize = 0;
    this.visibleItem = 2;
    this.showActiveText = "Show all active jobs";
    this.showAssignedText = "Show all assigned jobs";
    this.showPostedText="Show all posted jobs";
  }

  ngAfterViewInit() {

  }

  load() {
    /*Load active jobs*/
    this.jobService.loadJobApplicants()
      .then(data => {
        this.data = data;
        this.jobApplicationDetails = this.data.result;
        this.initializeActiveJobList();
      });
    /*Load assigned jobs*/
    this.jobService.loadAssignedJobs()
      .then(data => {
        this.assignedJobApplications = data;
        this.jobApplicationDetailsAssigned = this.assignedJobApplications.result;
        this.initializeAssignedJobList();
      });
    /*Load posted jobs*/
    this.jobService.loadPostedJobs()
      .then(data => {
        this.postedJobApplications = data;
        this.jobApplicationDetailsPosted = this.postedJobApplications.result;
        this.initializePostedJobList();
      });
  }

  initializeActiveJobList() {
    if (this.jobApplicationDetails) {
      this.jobApplicationDetailsPre = [];
      for (var i = 0; i < this.visibleItem; i++) {
        this.jobApplicationDetailsPre[i] = this.jobApplicationDetails[i];
      }
    }
  }

  showAllActiveJobList() {
    if (this.jobApplicationDetails) {
      if (this.jobApplicationDetailsPre.length == 2) {
        this.jobApplicationDetailsPre = [];
        this.jobApplicationDetailsPre = this.jobApplicationDetails;
        this.showActiveText = "Show Less";
      } else {
        this.initializeActiveJobList();
        this.showActiveText = "Show All active Jobs";
      }
    }
  }

  initializeAssignedJobList() {
    if (this.jobApplicationDetailsAssigned) {
      this.jobApplicationDetailsAssignedPre = [];
      for (var i = 0; i < this.visibleItem; i++) {
        this.jobApplicationDetailsAssignedPre[i] = this.jobApplicationDetailsAssigned[i];
      }
    }
  }

  showAllAssignedJobList() {
    if (this.jobApplicationDetailsAssigned) {
      if (this.jobApplicationDetailsAssignedPre.length == 2) {
        this.jobApplicationDetailsAssignedPre = [];
        this.jobApplicationDetailsAssignedPre = this.jobApplicationDetailsAssigned;
        this.showAssignedText = "Show Less";
        console.log("Assigned Job List: " + this.jobApplicationDetailsAssignedPre.length);
      } else {
        console.log("assigned Job List: " + this.jobApplicationDetailsAssignedPre.length);
        this.initializeAssignedJobList();
        this.showAssignedText = "Show all assigned jobs";
      }
    }
  }

  initializePostedJobList() {
    if (this.jobApplicationDetailsPosted) {
      this.jobApplicationDetailsPostedPre = [];
      for (var i = 0; i < this.visibleItem; i++) {
        this.jobApplicationDetailsPostedPre[i] = this.jobApplicationDetailsPosted[i];
      }
    }
  }

  showAllPostedJobList() {
    if (this.jobApplicationDetailsPosted) {
      if (this.jobApplicationDetailsPostedPre.length == 2) {
        this.jobApplicationDetailsPostedPre = [];
        this.jobApplicationDetailsPostedPre = this.jobApplicationDetailsPosted;
        this.showPostedText = "Show Less";
      } else {
        this.initializePostedJobList();
        this.showPostedText = "Show all posted jobs";
      }
    }
  }
}
