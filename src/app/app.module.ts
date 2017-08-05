import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { SessionTableComponent } from './session-table/session-table.component';
import { SessionComponent } from './session/session.component';
import { VisualComponent } from './visual/visual.component';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    SessionTableComponent,
    SessionComponent,
    VisualComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
