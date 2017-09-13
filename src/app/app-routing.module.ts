import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LobbyComponent } from './lobby/lobby.component';
import { SessionComponent } from './session/session.component';

const routes: Routes = [
  { path: 'lobby', component: LobbyComponent },
  { path: 'session', component: SessionComponent },
  { path: '**', component: LobbyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
