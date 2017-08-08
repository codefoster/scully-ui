import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { SessionTableComponent } from './session-table/session-table.component';
import { SessionComponent } from './session/session.component';
import { VisualComponent } from './visual/visual.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdToolbarModule, MdTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    SessionTableComponent,
    SessionComponent,
    VisualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
