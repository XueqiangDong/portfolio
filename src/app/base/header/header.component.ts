import {Component, OnInit,} from '@angular/core';
import {ToggleSidenavService} from "../../services/toggle-sidenav.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //暂时不用了
  // @Output() sidenavToggle = new EventEmitter();
  sidenavHidden = false;

  constructor(private toggleSidenav: ToggleSidenavService) {
  }

  ngOnInit() {
  }

  //黑夜模式开关的选中状态
  onChange(checked: boolean) {

  }

  //打开或者关闭侧边导航栏
  onClickForToggleSidenav(ev,data){
    this.toggleSidenav.sub.next(data);
    // console.log(JSON.stringify(ev));
    // console.log(JSON.stringify(data));
  }

  onClickHome(data){
    this.toggleSidenav.sub.next(data);
    // console.log(`点击home`);
    // console.log(`${data.id}`);
  }

  //下面的测试代码，纯粹测试，务必用完删除
  onTest(data){
    this.toggleSidenav.sub.next(data);
  }

}
