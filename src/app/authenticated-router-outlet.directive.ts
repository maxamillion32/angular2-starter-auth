import {Directive, Attribute, ViewContainerRef, DynamicComponentLoader} from '@angular/core';
import {Router, RouterOutlet, ComponentInstruction} from '@angular/router-deprecated';

@Directive({
  selector: 'router-outlet'
})
export class AuthenticatedRouterOutlet extends RouterOutlet {
    publicRoutes: any;
    private parentRouter: Router;

    constructor(_viewContainerRef: ViewContainerRef, _loader: DynamicComponentLoader,
                _parentRouter: Router, @Attribute('name') nameAttr: string) {
        super(_viewContainerRef, _loader, _parentRouter, nameAttr);

        this.parentRouter = _parentRouter;
        // The Boolean following each route below
        // denotes whether the route requires authentication to view
        this.publicRoutes = {
            'login': true
        };
    }

    activate(instruction: ComponentInstruction) {
        let url = instruction.urlPath;
        if ( !this.publicRoutes[url] && !localStorage.getItem('id_token') ) {
            // This is a secure route and you are not logged in, send to login page
            // todo: redirect to Login, may be there's a better way?
            this.parentRouter.navigateByUrl('/login');
        }
        return super.activate(instruction);
    }

}
