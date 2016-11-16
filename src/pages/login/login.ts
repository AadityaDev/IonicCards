import { Component, ViewChild, ViewChildren, QueryList, NgModule } from '@angular/core';
import {NavController, List} from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { AuthenticateService} from "../../providers/authenticate-service";
import {Http} from "@angular/http";

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthenticateService]
})
export class LoginPage {

  public people:any;
  posts:any;

  @ViewChildren('list-items') swingCards: QueryList<List>;

  tabsPage = TabsPage;
  // constructor(public navCtrl: NavController) {
  // }

  constructor(public navCtrl: NavController, public authenticateService: AuthenticateService) {
    this.loadPeople();
  }

    // constructor(public navCtrl: NavController, public http: Http) {
  //   this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
  //     this.posts = data.data.children;
  //     console.log(this.posts);
  //   },
  //   err => {
  //     console.log("OOps!");
  //   });
  // }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  loadPeople(){
    this.authenticateService.load()
        .then(data => {
          this.people = data;
          // this.person = data;
        });
  }

}
