import {Component, ViewChild, Input} from "@angular/core";
import {NavController} from "ionic-angular";
import {AuthenticateService} from "../../providers/authenticate-service";

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

  // @ViewChild('useremail') useremail: Input;
  // @ViewChild('password') password: Input;

  useremail: string;
  password: string;

  constructor(public navCtrl: NavController, public authenticateService: AuthenticateService) {
    // this.login();
  }

  login() {
      this.authenticateService.login(this.useremail, this.password)
        .then(data=>{
          console.log("Data: "+data);
          console.log(this.useremail+" Pass: "+this.password)
        });

  }

}
