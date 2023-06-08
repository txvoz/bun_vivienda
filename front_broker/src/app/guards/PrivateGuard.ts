import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PrivateGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        var token = localStorage.getItem("authToken");
        if (token !== "" && token !== null && token !== undefined) {
            return true;
        }
        this.router.navigate(['']);
        return false;
    }

}