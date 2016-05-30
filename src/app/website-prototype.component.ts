import { Component } from '@angular/core';
import { SignupComponent } from './+signup';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'website-prototype-app',
    templateUrl: 'website-prototype.component.html',
    styleUrls: ['website-prototype.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@Routes([
    {path: '/signup', component: SignupComponent}
])
export class WebsitePrototypeAppComponent {
    title = 'website-prototype works!';
}
