import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  const bgDir = 'assets/svg/bg';

  ir.addSvgIcon('banner', ds.bypassSecurityTrustResourceUrl(`${bgDir}/banner.svg`));
  ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${bgDir}/week.svg`));
};
