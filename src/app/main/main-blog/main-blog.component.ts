import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {slideToRight} from "../../anims";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-main-blog',
  templateUrl: './main-blog.component.html',
  styleUrls: ['./main-blog.component.scss'],
  animations: [
    slideToRight
  ]
})
export class MainBlogComponent implements OnInit, OnDestroy {

  // sidenavOpened = true;
  @HostBinding('@routerAnim') state: string;

  constructor(private ls: LocalStorageService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    //为什么取消订阅会出问题？
    // if (this.toggleSidenav.sub){
    //   this.toggleSidenav.sub.unsubscribe();
    //   console.log(`订阅已经被取消`);
    // }
    // console.log('blog我被销毁了');
  }

  //以下代码纯粹是测试
  onClick() {
    console.log(`15`);
  }

}
