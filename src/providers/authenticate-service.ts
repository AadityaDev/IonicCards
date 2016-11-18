import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {User} from "../models/User";

/*
 Generated class for the AuthenticateService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class AuthenticateService {

  data: any;

  constructor(public http: Http) {
    console.log('Hello AuthenticateService Provider');
  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api?results=10')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.results;
          resolve(this.data);
        });
    });
  }

  login(email: string, password: string) {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
    let user:User;
    user=new User(email,password);
    console.log(user.toString());
    return new Promise(resolve=>{
      this.http.post('http://staging.myrefers.com/employer/authenticate-employer',user)
        .map(res=>res.json())
        .subscribe(data=>{
          this.data=data;
          resolve(this.data);
        });
    });
  }
}
