import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Compo1Component } from './compo1/compo1.component';
import { Appareil1Component } from './appareil1/appareil1.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    Appareil1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
