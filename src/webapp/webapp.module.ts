import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WebappComponent } from './webapp.component';
import { PlatformModule } from 'src/platform/platform.module';

@NgModule({
  declarations: [
    WebappComponent
  ],
  imports: [
    BrowserModule,
    PlatformModule
  ],
  providers: [],
  bootstrap: [WebappComponent]
})
export class WebappModule { }
