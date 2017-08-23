import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MdButtonModule, MdGridListModule, MdIconModule, MdListModule, MdSidenavModule, MdToolbarModule} from '@angular/material';


@NgModule({
  imports: [
    MdToolbarModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdGridListModule,
  ],
  exports: [
    MdToolbarModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdGridListModule,
  ]
})
export class MaterialModule {
}