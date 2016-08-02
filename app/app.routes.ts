import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from "./app.component/app.component";
import { LobbyComponent } from './lobby.component/lobby.component';
import { RaceComponent } from './race.component/race.component';

const routes: RouterConfig = [
  { path: '', component: LobbyComponent },
  { path: 'race', component: RaceComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];