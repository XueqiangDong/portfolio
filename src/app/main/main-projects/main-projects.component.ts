import {Component, HostBinding, OnInit} from '@angular/core';
import {projectsBrowse, slideToRight} from "../../anims";

@Component({
  selector: 'app-main-projects',
  templateUrl: './main-projects.component.html',
  styleUrls: ['./main-projects.component.scss'],
  animations: [
    slideToRight, projectsBrowse
  ]
})
export class MainProjectsComponent implements OnInit {

  @HostBinding('@routerAnim') state: string;
  isMouseEnter: boolean;
  isMouseEnter1: boolean;

  constructor() { }

  ngOnInit() {
  }

  onMouseEnter(e){
    // console.log(`${e.target}`);
    this.isMouseEnter = true;
  }
  onMouseLeave(e){
    // console.log(`${e.target}`);
    this.isMouseEnter = false;
  }
  onMouseEnter1(e){
    // console.log(`${e.target}`);
    this.isMouseEnter1 = true;
  }
  onMouseLeave1(e){
    // console.log(`${e.target}`);
    this.isMouseEnter1 = false;
  }
}
