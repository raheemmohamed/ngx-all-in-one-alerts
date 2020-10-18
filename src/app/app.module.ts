import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxAllInOneAlertsComponent } from './ngx-all-in-one-alerts/ngx-all-in-one-alerts.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { HighlightJsModule } from 'ngx-highlight-js';

@NgModule({
  declarations: [AppComponent, NgxAllInOneAlertsComponent, DemoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    HighlightJsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
