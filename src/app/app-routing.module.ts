import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LobbyComponent } from './lobby/lobby.component';
import { SessionComponent } from './session/session.component';

const routes: Routes = [
  { path: '**', component: LobbyComponent },
  { path: 'lobby', component: LobbyComponent },
  { path: 'session', component: SessionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
