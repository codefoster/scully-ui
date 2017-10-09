import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { SessionTableComponent } from './session-table/session-table.component';
import { SessionComponent } from './session/session.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { RowerListComponent } from './rower-list/rower-list.component';
import { ApiService } from "./api.service";

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    SessionTableComponent,
    SessionComponent,
    RowerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
