import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InmuebleGridComponent } from './inmueble-grid/inmueble-grid.component';
import { FiltroComponent } from './filtro/filtro.component';
import { FormsModule } from '@angular/forms';
import { GoogleTagManagerService } from "angular-google-tag-manager";
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    InmuebleGridComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: 'googleTagManagerId', useValue: "GTM-NX8RCXT4"},
    GoogleTagManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
