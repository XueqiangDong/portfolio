import {animate, state, style, transition, trigger, group, query, keyframes} from '@angular/animations';

export const projectsBrowse = trigger('projectAnim', [
  state('isMouseEnter',style({'transform': 'scale(1.2,1.2)','transform-origin': 'left top','z-index':'99'})),
  state('isMouseLeave',style({'transform': 'scale(1,1)','transform-origin': 'left top'})),
  transition('isMouseLeave => isMouseEnter',[
    // style({transform: 'scale(1.3,1.3)', opacity: 1}),
    group([
      animate('.5s ease-out',keyframes([
        style({'transform-origin': 'left top','transform': 'scale(1.1,1.1)','z-index':'99'}),
        style({'transform-origin': 'left top','transform': 'scale(1.2,1.2)','z-index':'99'}),
      ])),
      // animate('500ms ease-in',style({transform: 'translateX(0)'}))
    ]),
  ]),
  state('isMouseEnter1',style({'transform': 'scale(1.2,1.2)','transform-origin': 'left top','z-index':'99'})),
  state('isMouseLeave1',style({'transform': 'scale(1,1)','transform-origin': 'left top'})),
  transition('isMouseLeave1 => isMouseEnter1',[
    // style({transform: 'scale(1.3,1.3)', opacity: 1}),
    group([
      animate('.5s ease-out',keyframes([
        style({'transform-origin': 'left top','transform': 'scale(1.1,1.1)','z-index':'99'}),
        style({'transform-origin': 'left top','transform': 'scale(1.2,1.2)','z-index':'99'}),
      ])),
      // animate('500ms ease-in',style({transform: 'translateX(0)'}))
    ]),
  ]),
  // transition('* => void',[
  //   style({transform: 'translateX(0)', opacity: 1}),
  //   group([
  //     animate('.5s ease-out',keyframes([
  //       style({opacity: 1, 'position': 'fixed'}),
  //       style({opacity: 0, 'position': 'fixed'}),
  //       // style({opacity: 0, 'position': 'relative'}),
  //     ])),
  //     animate('500ms ease-in',style({transform: 'translateX(100%)'}))
  //   ]),
  // ]),
]);
