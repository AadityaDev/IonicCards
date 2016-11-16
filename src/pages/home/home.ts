import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticateService } from  '../../providers/authenticate-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public people: any;
  public person: any;

  constructor(public navCtrl: NavController,public authenticateService:AuthenticateService) {
    alert("hi");
    this.loadPeople();
  }

  loadPeople(){
    this.authenticateService.load()
      .then(data => {
        this.people = data;
      });
  }
}
