import {Component, ViewChild, ViewChildren, QueryList, NgModule} from '@angular/core';
import {NavController, List} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {
    StackConfig,
    Stack,
    Card,
    ThrowEvent,
    DragEvent,
    SwingStackComponent,
    SwingCardComponent} from 'angular2-swing';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;
  @ViewChild(List) activeJobList:List;

  cards: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';

  constructor(public navCtrl: NavController,public http: Http) {
    // this.stackConfig = {
    //   throwOutConfidence: (offset, element) => {
    //     return Math.min(Math.abs(offset) / (element.offsetWidth/2), 1);
    //   },
    //   transform: (element, x, y, r) => {
    //     this.onItemMove(element, x, y, r);
    //   },
    //   throwOutDistance: (d) => {
    //     return 800;
    //   }
    // };
  }

  ngAfterViewInit() {
    // Either subscribe in controller or set in HTML
    // this.swingStack.throwin.subscribe((event: DragEvent) => {
    //   event.target.style.background = '#ffffff';
    // });
    //
    // this.cards = [{email: ''}];
    // this.addNewCards(1);
  }

  // Called whenever we drag an element
  onItemMove(element, x, y, r) {
    // var color = '';
    // var abs = Math.abs(x);
    // let min = Math.trunc(Math.min(16*16 - abs, 16*16));
    // let hexCode = this.decimalToHex(min, 2);
    //
    // if (x < 0) {
    //   color = '#FF' + hexCode + hexCode;
    //   console.log('x is less than zero');
    // } else {
    //   color = '#' + hexCode + 'FF' + hexCode;
    // }
    //
    // element.style.background = color;
    // element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }

// // Connected through HTML
//   voteUp(like: boolean) {
//     let removedCard = this.cards.pop();
//     this.addNewCards(1);
//     if (like) {
//       this.recentCard = 'You liked: ' + removedCard.email;
//     } else {
//       this.recentCard = 'You disliked: ' + removedCard.email;
//     }
//   }
//
// // Add new cards to our array
//   addNewCards(count: number) {
//     this.http.get('https://randomuser.me/api/?results=' + count)
//         .map(data => data.json().results)
//         .subscribe(result => {
//           for (let val of result) {
//             this.cards.push(val);
//           }
//         })
//   }
//
// // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
//   decimalToHex(d, padding) {
//     var hex = Number(d).toString(16);
//     padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
//
//     while (hex.length < padding) {
//       hex = "0" + hex;
//     }
//
//     return hex;
//   }
}
