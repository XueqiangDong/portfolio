import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ShareModule} from "./share/share.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BaseModule} from "./base/base.module";
import {MainModule} from "./main/main.module";
import {ToggleSidenavService} from "./services/toggle-sidenav.service";
import {LocalStorageService} from "./services/local-storage.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ShareModule,
    AppRoutingModule, BaseModule, MainModule, BrowserAnimationsModule
  ],
  providers: [
    ToggleSidenavService, LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
