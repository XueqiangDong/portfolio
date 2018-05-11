import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class ToggleSidenavService {

  constructor() { }

  sub = new Subject<any>();

}
