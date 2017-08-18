import { UserProfileService } from './user-profile.service';
import { Injectable } from '@angular/core';

import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CanActivateAuthGuard implements CanActivate, CanActivateChild {

    constructor(private userProfileService: UserProfileService, private router: Router) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        if(this.userProfileService.isLoggedIn && route){
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { redirectTo: state.url }});

        return false;
    }

    public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(childRoute, state);
    }
}