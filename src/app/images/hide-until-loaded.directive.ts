import {Directive} from '@angular/core';

@Directive({
  selector: 'img[hideUntilLoaded]',
  host: {
    '[style.opacity]': 'opacity',
    '[style.transition]': '"opacity 0.5s linear"',
    '(load)': 'opacity = "1"',
  },
})
export class HideUntilLoaded {
  opacity: 0|1 = 0;
}