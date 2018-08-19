import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SearchformComponent } from './searchform/searchform.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    SearchformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
