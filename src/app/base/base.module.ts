import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ShareModule} from "../share/share.module";
import {loadSvgResources} from "../utils/svg.util";
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@NgModule({
  imports: [
    ShareModule,
  ],
  exports: [
    HeaderComponent, FooterComponent,
  ],
  declarations: [HeaderComponent, FooterComponent]
})
export class BaseModule {

  constructor(ir: MatIconRegistry, ds: DomSanitizer) {
    loadSvgResources(ir, ds);
  }
}
