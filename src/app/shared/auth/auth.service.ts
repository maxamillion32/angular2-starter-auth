import { Injectable, NgZone } from '@angular/core';
// import { Router } from '@angular/router';
import { Router } from '@angular/router-deprecated';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
    private lock = new Auth0Lock('9yhAWwVUCQhhTaFw63iV4F2qTAJCY0bH', '8bitghost.auth0.com');
    // lock = new Auth0Lock('YOUR_CLIENT_ID', 'YOUR_NAMESPACE');
    private zoneImpl: NgZone;
    user: Object;

    constructor(private router: Router, zone: NgZone) {
        this.zoneImpl = zone;
        if ( tokenNotExpired() ) {
            this.user = JSON.parse(localStorage.getItem('profile'));
        }
    }

    login() {
        // Lock widget configuration
        var config = {
            // icon: 'https://auth0.com/boot/badge.png',
            icon: 'http://ih2.redbubble.net/image.14727980.2772/sticker,375x360.u3.png',
            // signupLink: 'https://yoursite.com/signup',
            closable: false,
            rememberLastLogin: false,
            disableSignupAction: true,
            dict: {
                signin: {
                    title: "Signum"
                }
            }
            // theme: false
            // container: 'root'
        };

        // TODO: Docs https://auth0.com/docs/libraries/lock
        // Show the Auth0 Lock widget
        this.lock.show(config, (err, profile, token) => {
            if ( err ) {
                // Error callback
                // alert(err);
                return;
            } else {
                // Success callback
                // authentication is successful, save the items in local storage
                localStorage.setItem('profile', JSON.stringify(profile));
                localStorage.setItem('id_token', token);
                this.zoneImpl.run(() => this.user = profile);
                this.router.navigate(['Home']);
            }
        });
    }

    logout() {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        this.zoneImpl.run(() => this.user = null);
        this.router.navigate(['Login']);
    }

    authenticated() {
        return tokenNotExpired();
    }
}
