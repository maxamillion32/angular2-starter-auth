import { Component } from '@angular/core';
// import { Routes , ROUTER_DIRECTIVES , ROUTER_PROVIDERS, Router } from '@angular/router';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router-deprecated';
import { HeaderComponent } from './shared/ui/header';
import { FooterComponent } from './shared/ui/footer';
import { LoginComponent } from './+login';
import { HomeComponent } from './+home';
import { ProfileComponent } from './+profile';
import { AuthService } from './shared/auth/auth.service';
import { AuthenticatedRouterOutlet } from './authenticated-router-outlet.directive';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [AuthenticatedRouterOutlet, HeaderComponent, FooterComponent ],
    providers: [ROUTER_PROVIDERS, AuthService]
})
// @Routes([
//     {path: '/login', component: LoginComponent},
//     {path: '/', component: HomeComponent},
//     {path: '/profile', component: ProfileComponent}
// ])
@RouteConfig([
    {path: '/login', name: 'Login', component: LoginComponent},
    {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/**',  redirectTo: ["Home"]},
    {path: '/profile', name: 'Profile', component: ProfileComponent}
])
export class AppComponent {
    constructor(private router: Router, private authService: AuthService) { }

}
