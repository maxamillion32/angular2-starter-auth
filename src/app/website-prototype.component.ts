import { Component } from '@angular/core';
import { SignupComponent } from './+signup';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { HomeComponent } from './+home';
import { DressesComponent } from './+dresses';
import { AuthService } from './shared/auth/auth.service';
import { ProfileComponent } from './+profile';

@Component({
    moduleId: module.id,
    selector: 'website-prototype-app',
    templateUrl: 'website-prototype.component.html',
    styleUrls: ['website-prototype.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ AuthService, ROUTER_PROVIDERS]
})
@Routes([
    {path: '/', component: HomeComponent},
    {path: '/dresses', component: DressesComponent},
    {path: '/profile', component: ProfileComponent}
])
export class WebsitePrototypeAppComponent {
    user: Object;

    constructor(private authService: AuthService) {
        if ( this.authService.authenticated() ) {
            this.user = this.authService.user;
        }
    }

    login() {
        this.authService.login();
    }

    signup() {
        this.authService.signup();
    }

    logout() {
        this.authService.logout();
    }
}
