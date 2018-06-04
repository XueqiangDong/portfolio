import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {ToggleSidenavService} from "../../services/toggle-sidenav.service";
import {slideToRight} from "../../anims";

@Component({
  selector: 'app-main-blog',
  templateUrl: './main-blog.component.html',
  styleUrls: ['./main-blog.component.scss'],
  animations:[
    slideToRight
  ]
})
export class MainBlogComponent implements OnInit, OnDestroy {

  sidenavOpened = true;
  @HostBinding('@routerAnim') state: string;

  constructor(private toggleSidenav: ToggleSidenavService) { }

  ngOnInit() {
    this.toggleSidenav.sub.subscribe((data)=>{
      console.log(data.id);
      this.sidenavOpened = !this.sidenavOpened;
    })
  }

  ngOnDestroy(){
    //为什么取消订阅会出问题？
    // if (this.toggleSidenav.sub){
    //   this.toggleSidenav.sub.unsubscribe();
    //   console.log(`订阅已经被取消`);
    // }
  }

  //以下代码纯粹是测试
  onClick(){
    console.log(`15`);
  }

}
