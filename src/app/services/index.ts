import { NgModule } from '@angular/core';
import {ToggleSidenavService} from "./toggle-sidenav.service";
import {ShareModule} from "../share/share.module";

@NgModule({
  imports: [
    ShareModule,
  ],
  exports:[
    ToggleSidenavService,
  ],
  providers:[
    ToggleSidenavService,
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
