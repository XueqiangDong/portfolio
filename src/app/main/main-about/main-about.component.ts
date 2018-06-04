import {Component, HostBinding, OnInit} from '@angular/core';
import {slideToRight} from "../../anims";

@Component({
  selector: 'app-main-about',
  templateUrl: './main-about.component.html',
  styleUrls: ['./main-about.component.scss'],
  animations:[
    slideToRight
  ]
})
export class MainAboutComponent implements OnInit {

  @HostBinding('@routerAnim') state: string;

  constructor() { }

  ngOnInit() {
  }

}
