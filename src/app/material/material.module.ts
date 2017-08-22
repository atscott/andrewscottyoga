import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MdToolbarModule, MdSidenavModule, MdIconModule, MdButtonModule, MdListModule} from '@angular/material';


@NgModule({
  imports: [
    MdToolbarModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
  ],
  exports: [
    MdToolbarModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
  ]
})
export class MaterialModule {
}