import { Component } from '@angular/core';
// import { Routes , ROUTER_DIRECTIVES , ROUTER_PROVIDERS, Router } from '@angular/router';
import { RouteConfig, ROUTER_DIRECTIVES , ROUTER_PROVIDERS, Router } from '@angular/router-deprecated';
import { HeaderComponent } from './shared/ui/header';
import { FooterComponent } from './shared/ui/footer';
import { LoginComponent } from './+login';
import { HomeComponent } from './+home';
import { ProfileComponent } from './+profile';
import { AuthService } from './shared/auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent ],
    providers: [ROUTER_PROVIDERS, AuthService]
})
// @Routes([
//     {path: '/login', component: LoginComponent},
//     {path: '/', component: HomeComponent},
//     {path: '/profile', component: ProfileComponent}
// ])
@RouteConfig([
    {path: '/login', name: 'Login', component: LoginComponent},
    {path: '/', name: 'Home', component: HomeComponent},
    {path: '/profile', name: 'Profile', component: ProfileComponent}
])
export class AppComponent {
    // http://stackoverflow.com/questions/37145855/angular2-menu-multilevel-dropdown-doesnt-work
    // https://plnkr.co/edit/zG0Q5Q3dsmJqsplZKG7e?p=preview
    // Create menu item component

    constructor(private router: Router, private authService: AuthService) {
        if ( !this.authService.authenticated() ) {
            // The user is not logged in, navigate to the login page
            // TODO: Instead of router navigate figure out a way to send the user to a URL, this is based off the existing URL
            this.router.navigate(['Login']);
            // this.router.navigate(['/login']);
        }
    }

}
