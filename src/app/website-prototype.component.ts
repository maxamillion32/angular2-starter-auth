import { Component } from '@angular/core';
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
    // http://stackoverflow.com/questions/37145855/angular2-menu-multilevel-dropdown-doesnt-work
    // https://plnkr.co/edit/zG0Q5Q3dsmJqsplZKG7e?p=preview
    // Create menu item component

    constructor(private authService: AuthService) { }

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
