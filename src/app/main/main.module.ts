import { NgModule } from '@angular/core';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import {ShareModule} from "../share/share.module";
import { CobComponent } from './cob/cob.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { MainAboutComponent } from './main-about/main-about.component';
import {MainRoutingModule} from "./main-routing.module";

@NgModule({
  imports: [
    ShareModule, MainRoutingModule
  ],
  exports:[
    MainBlogComponent, CobComponent,
  ],
  declarations: [
    SidenavMenuComponent, CobComponent, MainHomeComponent,
    MainBlogComponent, MainAboutComponent,
  ]
})
export class MainModule { }
