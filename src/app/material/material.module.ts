import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MdButtonModule, MdGridListModule, MdIconModule, MdListModule, MdSidenavModule, MdToolbarModule, MdMenuModule} from '@angular/material';


@NgModule({
  imports: [
    MdToolbarModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdGridListModule,
    MdMenuModule,
  ],
  exports: [
    MdMenuModule,
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
