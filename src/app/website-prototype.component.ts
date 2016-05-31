import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES } from '@angular/router';
import { HomeComponent } from './+home';
import { DressesComponent } from './+dresses';
import { ProfileComponent } from './+profile';
import { DashboardComponent } from './+dashboard';
import { HeaderComponent } from './shared/ui/header';
import { FooterComponent } from './shared/ui/footer';

@Component({
    moduleId: module.id,
    selector: 'website-prototype-app',
    templateUrl: 'website-prototype.component.html',
    styleUrls: ['website-prototype.component.css'],
    directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent ]
})
@Routes([
    {path: '/', component: HomeComponent},
    {path: '/dresses', component: DressesComponent},
    {path: '/profile', component: ProfileComponent},
    {path: '/dashboard', component: DashboardComponent}
])
export class WebsitePrototypeAppComponent {
    // http://stackoverflow.com/questions/37145855/angular2-menu-multilevel-dropdown-doesnt-work
    // https://plnkr.co/edit/zG0Q5Q3dsmJqsplZKG7e?p=preview
    // Create menu item component

    constructor() { }

}
