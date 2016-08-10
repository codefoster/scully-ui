import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from "./app.component/app.component";
import { LobbyComponent } from './lobby.component/lobby.component';
import { SessionComponent } from './session.component/session.component';

const routes: RouterConfig = [
  { path: '', component: LobbyComponent },
  { path: 'session', component: SessionComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];