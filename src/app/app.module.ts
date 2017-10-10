import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { SessionTableComponent } from './session-table/session-table.component';
import { SessionComponent } from './session/session.component';
import { AppRoutingModule } from './app-routing.module';
import { RowerListComponent } from './rower-list/rower-list.component';
import { ApiService } from "./api.service";
import { RowerComponent } from './rower/rower.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    SessionTableComponent,
    SessionComponent,
    RowerListComponent,
    RowerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
