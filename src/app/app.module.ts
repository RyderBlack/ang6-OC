import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Compo1Component } from './compo1/compo1.component';
import { Appareil1Component } from './appareil1/appareil1.component';

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    Appareil1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
