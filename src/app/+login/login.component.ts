import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Router } from '@angular/router-deprecated';
import { AuthService } from './../shared/auth/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService) {
        // if ( this.authService.authenticated() ) {
        //     // The user is already logged in, send them to the home page
        //     this.router.navigate(['/']);
        // } else {
        //     this.authService.login();
        //     // this.router.navigate(['/login']);
        // }
    }

    ngOnInit() {
        if ( this.authService.authenticated() ) {
            // The user is already logged in, send them to the home page
            this.router.navigate(['Home']);
        } else {
            this.authService.login();
            // this.router.navigate(['/login']);
        }
    }

}
