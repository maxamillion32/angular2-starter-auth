import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AuthService } from './../../auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'], // TODO see if I can use scss instead of css
    directives: [ROUTER_DIRECTIVES],
    providers: [ AuthService ]
})
export class HeaderComponent implements OnInit {

    constructor(private authService: AuthService) {}

    ngOnInit() {
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
