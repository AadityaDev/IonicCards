import {Component, ViewChild, ViewChildren, QueryList} from "@angular/core";
import {NavController, List} from "ionic-angular";
import {Http, Headers} from "@angular/http";
import "rxjs/Rx";
import {SwingStackComponent, SwingCardComponent} from "angular2-swing";
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
  @ViewChild(List) activeJobList: List;

  headers: Headers;
  data: MyRefersResponse;
  jobApplicationDetailsPre: Array<JobApplicationDetail>;
  jobApplicationDetails: Array<JobApplicationDetail>;
  activeJobsSize: number;
  visibleItem: number;
  showActiveText: string;

  constructor(public navCtrl: NavController, public http: Http, public jobService: JobService) {
    this.load();
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'c082d3c8893cea72c8d69792d1fdc7bc');
    this.activeJobsSize = 0;
    this.visibleItem = 2;
    this.showActiveText = "Show All active Jobs";
  }

  ngAfterViewInit() {
  }

  load() {
    this.jobService.loadJobApplicants()
      .then(data => {
        this.data = data;
        this.jobApplicationDetails = this.data.result;
        this.initializeActiveJobList();
      });
  }

  initializeActiveJobList() {
    if (this.jobApplicationDetails) {
      this.jobApplicationDetailsPre = [];
      for (var i = 0; i < this.visibleItem; i++) {
        this.jobApplicationDetailsPre[i] = this.jobApplicationDetails[i];
      }
      console.log("Active Job List: " + this.jobApplicationDetailsPre.length);
    }
  }

  showAllActiveJobList() {
    if (this.jobApplicationDetails) {
      if (this.jobApplicationDetailsPre.length == 2) {
        console.log("show Job List: " + this.jobApplicationDetailsPre.length);
        this.jobApplicationDetailsPre = this.jobApplicationDetails;
        this.showActiveText = "Show Less";
      } else {
        console.log("ShowAll Job List: " + this.jobApplicationDetailsPre.length);
        this.initializeActiveJobList();
        this.showActiveText = "Show All active Jobs";
      }
    }
  }
}
