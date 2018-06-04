import {animate, state, style, transition, trigger, group, query, keyframes} from '@angular/animations';

export const slideToRight = trigger('routerAnim', [
  state('void',style({'height': '100%','width': '100%',})),
  state('*',style({'height': '100%','width': '100%',})),
  transition('void => *',[
    style({transform: 'translateX(-100%)', opacity: 0}),
    group([
      animate('.5s ease-out',keyframes([
        style({opacity: 0, 'position': 'fixed'}),
        style({opacity: 1, 'position': 'fixed'}),
        style({opacity: 1, 'position': 'relative'}),
      ])),
      animate('500ms ease-in',style({transform: 'translateX(0)'}))
    ]),
  ]),
  transition('* => void',[
    style({transform: 'translateX(0)', opacity: 1}),
    group([
      animate('.5s ease-out',keyframes([
        style({opacity: 1, 'position': 'fixed'}),
        style({opacity: 0, 'position': 'fixed'}),
        // style({opacity: 0, 'position': 'relative'}),
      ])),
      animate('500ms ease-in',style({transform: 'translateX(100%)'}))
    ]),
  ]),
]);
