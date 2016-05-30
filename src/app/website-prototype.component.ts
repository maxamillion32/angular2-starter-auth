import { Component } from '@angular/core';
import { SignupComponent } from './+signup';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { HomeComponent } from './+home';
import { DressesComponent } from './+dresses';
import { AuthService } from './shared/auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'website-prototype-app',
    templateUrl: 'website-prototype.component.html',
    styleUrls: ['website-prototype.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@Routes([
    {path: '/signup', component: SignupComponent},
    {path: '/home', component: HomeComponent},
    {path: '/dresses', component: DressesComponent}
])
export class WebsitePrototypeAppComponent {
    title = 'website-prototype works!';
    constructor(private authService: AuthService) {

    }
}
