import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component/app.component';
import { appRouterProviders } from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS
]);