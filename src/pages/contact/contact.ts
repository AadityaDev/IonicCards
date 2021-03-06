import {Component, QueryList, ViewChildren, ViewChild} from "@angular/core";
import {NavController} from "ionic-angular";
import {JobService} from "../../providers/job-service";
import {StackConfig, SwingCardComponent, SwingStackComponent} from "angular2-swing";
import {Http} from "@angular/http";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public candidates: any;

  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  cards: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';


  constructor(public navCtrl: NavController, public jobService: JobService, public http: Http) {
    this.stackConfig = {
      throwOutConfidence: (offset, element) => {
        return Math.min(Math.abs(offset) / (element.offsetWidth / 2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };

  }

  loadCandidates() {
    // this.jobService.loadActiveJobList()
    //   .then(data=>{
    //     this.candidates=data.result;
    //     console.log(JSON.stringify(this.candidates));
    //   });
    this.jobService.loadJobApplicants()
      .then(data => {
        this.candidates = data.result;
        console.log(JSON.stringify(this.candidates));
      });
  }

  ngAfterViewInit() {
    // Either subscribe in controller or set in HTML
    this.swingStack.throwin.subscribe((event: DragEvent) => {
      // event.target.style.background = '#ffffff';
    });

    this.cards = [{email: ''}];
    this.addNewCards(1);
    this.hideAllButtons();
  }
  // Called whenever we drag an element
  onItemMove(element, x, y, r) {
    // var color = '';
    // var abs = Math.abs(x);
    // let min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    if (x < 0) {
      console.log("Left Clicked");
      this.showAllButtons();
    } else {
      console.log("Right Clicked");
      this.showAllButtons();
    }
    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }

// Connected through HTML
  voteUp(like: boolean) {
    let removedCard = this.cards.pop();
    this.addNewCards(1);
    if (like) {
      this.recentCard = 'You liked: ' + removedCard.email;
    } else {
      this.recentCard = 'You disliked: ' + removedCard.email;
    }
    this.hideAllButtons();
  }

// Add new cards to our array
  addNewCards(count: number) {
    this.http.get('https://randomuser.me/api/?results=' + count)
      .map(data => data.json().results)
      .subscribe(result => {
        for (let val of result) {
          this.cards.push(val);
        }
      })
  }

  hideAllButtons() {
    document.getElementById("shortlistedButton").style.visibility = 'hidden';
    document.getElementById("rejectedButton").style.visibility = 'hidden';
    document.getElementById("shareButton").style.visibility = 'hidden';
    document.getElementById("onHoldButton").style.visibility = 'hidden';
  }

  showAllButtons() {
    document.getElementById("shortlistedButton").style.visibility = 'visible';
    document.getElementById("rejectedButton").style.visibility = 'visible';
    document.getElementById("shareButton").style.visibility = 'visible';
    document.getElementById("onHoldButton").style.visibility = 'visible';
  }
}
