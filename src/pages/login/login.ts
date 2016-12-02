import {Component, ViewChild, Input} from "@angular/core";
import {NavController} from "ionic-angular";
import {AuthenticateService} from "../../providers/authenticate-service";
import {TabsPage} from "../../pages/tabs/tabs";
// import {SecureStorage} from 'ionic-native';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthenticateService]
})
export class LoginPage {

  useremail: string;
  password: string;

  constructor(public navCtrl: NavController, public authenticateService: AuthenticateService) {
    this.useremail='kb@myrefers.com';
    this.password='Myrefers@123';
  }

  login() {
      this.authenticateService.login(this.useremail, this.password)
        .then(data=>{
          if(data){
            if(data.result){
              //result found
              console.log(JSON.stringify(data.result));
              this.navCtrl.push(TabsPage);
            }else {
              //error found
              console.log(JSON.stringify(data.error));
            }
          }else{
            //no data found
          }
        });

  }

}
