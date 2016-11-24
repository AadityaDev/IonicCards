import {Component, ViewChild} from "@angular/core";
import {Platform, MenuController, NavController} from "ionic-angular";
import {StatusBar, Splashscreen} from "ionic-native";
import {HomePage} from "../pages/home/home";
import {AboutPage} from "../pages/about/about";
import {ContactPage} from "../pages/contact/contact";
import {LoginPage} from "../pages/login/login";
import {TabsPage} from  "../pages/tabs/tabs";
import {SecureStorage} from "ionic-native";

@Component({
  template: `<ion-menu [content]="content">
  <ion-header>
    <ion-toolbar>
      <ion-title>Menu</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-list>
      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
        {{p.title}}
      </button>
    </ion-list>
  </ion-content>

</ion-menu>

<!-- Disable swipe-to-go-back because it's poor UX to combine STGB with side menus -->
<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`
})
export class MyApp {

  @ViewChild('nav') nav: NavController;
  public rootPage: any;
  public pages: any[];
  private secureStorage: SecureStorage;

  constructor(private platform: Platform, private menu: MenuController) {
    this.menu = menu;
    this.platform = platform;
    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Contact', component: ContactPage},
      {title: 'About', component: AboutPage}
    ];
    this.rootPage = TabsPage;
    // this.nav.push(LoginPage);

    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.secureStorage = new SecureStorage();
    this.secureStorage.create('ats_store')
      .then(()=>console.log('Storage is ready'), error=>console.log(error));
  }

  openPage(page) {
    this.menu.close()
    // Using this.nav.setRoot() causes
    // Tabs to not show!
    this.nav.push(page);
  }

}
