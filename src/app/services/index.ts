import { NgModule } from '@angular/core';
import {ToggleSidenavService} from "./toggle-sidenav.service";
import {ShareModule} from "../share/share.module";
import {LocalStorageService} from "./local-storage.service";

@NgModule({
  imports: [
    ShareModule,
  ],
  exports:[
    ToggleSidenavService, LocalStorageService
  ],
  providers:[
    ToggleSidenavService, LocalStorageService
  ],
  declarations: [

  ]
})
export class ServicesModule { }
// export {
//   ToggleSidenavService,
// };
//
// @NgModule()
// export class ServicesModule {
//   static forRoot(){
//     return {
//       ngModule: ServicesModule,
//       providers:[
//         ToggleSidenavService,
//       ]
//     }
//   }
// }
