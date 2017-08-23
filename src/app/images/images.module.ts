import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {HideUntilLoaded} from './hide-until-loaded.directive';
import {ProgressiveBackgroundImageDirective} from './progressive-background-image.directive';
import {ProgressiveImageComponent} from './progressive-image.component';

@NgModule({
  declarations: [
    ProgressiveBackgroundImageDirective,
    ProgressiveImageComponent,
    HideUntilLoaded,
  ],
  exports: [
    ProgressiveBackgroundImageDirective,
    ProgressiveImageComponent,
    HideUntilLoaded,
  ],
  imports: [
    CommonModule,
  ]
})
export class ImagesModule {
}