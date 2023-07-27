import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { Fils1Component } from './parent/fils1/fils1.component';
import { Fils2Component } from './parent/fils2/fils2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Fils1Component,
    Fils2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
