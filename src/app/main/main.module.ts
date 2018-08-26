import { NgModule } from '@angular/core';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import {ShareModule} from "../share/share.module";
import { CobComponent } from './cob/cob.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { MainAboutComponent } from './main-about/main-about.component';
import {MainRoutingModule} from "./main-routing.module";
import { MainProjectsComponent } from './main-projects/main-projects.component';

@NgModule({
  imports: [
    ShareModule, MainRoutingModule,
  ],
  exports:[
    MainBlogComponent, CobComponent, SidenavMenuComponent
  ],
  declarations: [
    SidenavMenuComponent, CobComponent, MainHomeComponent,
    MainBlogComponent, MainAboutComponent, MainProjectsComponent,
  ]
})
export class MainModule { }
