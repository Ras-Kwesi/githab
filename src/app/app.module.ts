import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {GithabService} from '../app/githabs/githab.service';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SearchformComponent } from './searchform/searchform.component';
import { LastloginPipe } from './lastlogin.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    SearchformComponent,
    LastloginPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [GithabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
