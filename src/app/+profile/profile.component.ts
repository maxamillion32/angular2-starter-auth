import { Component, OnInit } from '@angular/core';
import { AuthService } from './../shared/auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {
    user: Object;

    constructor(private authService: AuthService) {
        console.log('ProfileComponent constructor()');
    }

    ngOnInit() {
        // TODO: Once logged into Auth0, get the user's details from the user service
        console.log('inside the profile component, ngOnit');
    }

}
