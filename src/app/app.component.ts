import {Component, ViewChild} from "@angular/core";
import {Platform, MenuController, NavController} from "ionic-angular";
import {StatusBar, Splashscreen} from "ionic-native";
import {TabsPage} from "../pages/tabs/tabs";
import {HomePage} from "../pages/home/home";
import {AboutPage} from "../pages/about/about";
import {ContactPage} from "../pages/contact/contact";
import {LoginPage} from "../pages/login/login";

@Component({
  templateUrl: 'app.html',
})
export class MyApp {

  @ViewChild('nav') nav: NavController;
  public rootPage: any;
  public pages: any[];

  constructor(private platform: Platform, private menu: MenuController) {
    this.menu = menu;
    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Contact', component: ContactPage},
      {title: 'About', component: AboutPage}
    ];
    this.rootPage = LoginPage;
    // this.nav.push(LoginPage);

    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.menu.close()
    // Using this.nav.setRoot() causes
    // Tabs to not show!
    this.nav.push(page);
  }

}
