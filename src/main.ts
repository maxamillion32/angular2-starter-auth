import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { WebsitePrototypeAppComponent, environment } from './app/';
import { AuthService } from './app/index';

if (environment.production) {
  enableProdMode();
}

bootstrap(WebsitePrototypeAppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(AuthHttp, {
        useFactory: (http: Http) => {
            return new AuthHttp(new AuthConfig(), http);
        },
        deps: [ Http ]
    }),
    AuthService
]);

