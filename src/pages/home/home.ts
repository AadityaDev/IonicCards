import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticateService } from  '../../providers/authenticate-service';
import {AboutPage} from "../../pages/about/about";
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public people: any;
  public person: any;
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController,public authenticateService:AuthenticateService) {
    this.loadPeople();
  }

  loadPeople(){
    this.authenticateService.load()
      .then(data => {
        this.people = data;
      });
  }
}
