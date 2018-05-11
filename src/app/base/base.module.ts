import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ShareModule} from "../share/share.module";

@NgModule({
  imports: [
    ShareModule,
  ],
  exports: [
    HeaderComponent, FooterComponent,
  ],
  declarations: [HeaderComponent, FooterComponent]
})
export class BaseModule { }
