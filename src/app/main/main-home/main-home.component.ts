import {Component, HostBinding, OnInit} from '@angular/core';
import {slideToRight} from "../../anims";

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss'],
  animations:[
    slideToRight
  ]
})
export class MainHomeComponent implements OnInit {

  @HostBinding('@routerAnim') state: string;

  constructor() { }

  ngOnInit() {
  }

}
