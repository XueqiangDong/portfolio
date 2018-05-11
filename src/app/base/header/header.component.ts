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

  onChange(checked: boolean) {

  }

  //黑夜模式开关的选中状态
  onClickForToggleSidenav(ev){
    this.toggleSidenav.sub.next(ev);
  }

  //下面的测试代码，纯粹测试，务必用完删除
  onTest(){
    this.sidenavHidden = !this.sidenavHidden;
  }

}
