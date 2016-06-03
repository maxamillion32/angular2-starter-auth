import { Component, OnInit } from '@angular/core';
// import { ROUTER_DIRECTIVES } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { AuthService } from './../../auth/auth.service';
import { AuthenticatedRouterOutlet } from './../../../authenticated-router-outlet.directive';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],
    directives: [AuthenticatedRouterOutlet, ROUTER_DIRECTIVES],
    providers: [ AuthService ]
})
export class HeaderComponent implements OnInit {

    constructor(private authService: AuthService) {}

    ngOnInit() {
    }

    login() {
        this.authService.login();
    }

    logout() {
        this.authService.logout();
    }
}
