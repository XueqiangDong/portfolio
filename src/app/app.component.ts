import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToggleSidenavService} from "./services/toggle-sidenav.service";
import {LocalStorageService} from "./services/local-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  constructor(private toggleSidenav: ToggleSidenavService, private ls: LocalStorageService){

  }
  title = 'app';
  sidenavOpened = false;
  haveCob: boolean = true;
  ngOnInit(){
    this.toggleSidenav.sub.subscribe((data)=>{
      // console.log(data.id);
      switch (data.id){
        case 'toggle': this.sidenavOpened = !this.sidenavOpened; break;
        case 'home': this.sidenavOpened = false; break;
        case 'about': this.sidenavOpened = false; break;
        case 'blog': this.sidenavOpened = true; break;
        default: break;
      }
    });
    // this.sidenavOpened = this.ls.get('sidenavOpened') === 'true';
    // console.log(this.sidenavOpened = this.ls.get('sidenavOpened') === 'true');
    // console.log(this.ls.get('sidenavOpened'));
  }
  ngOnDestroy(){
    // this.ls.set('sidenavOpened',`${this.sidenavOpened}`)
    // console.log('我被笑毁了');
  }
}
