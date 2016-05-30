import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../shared/auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'app-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService) {}

    ngOnInit() {
        // this.authService.logout();
        // if ( this.authService.authenticated() ) {
        //     this.router.navigate(['/profile']);
        // } else {
        //     this.authService.login();
        // }
    }

}
