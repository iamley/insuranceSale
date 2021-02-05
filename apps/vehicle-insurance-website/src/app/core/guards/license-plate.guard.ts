import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({providedIn: 'root'})
export class LicensePlateGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    const data = this.router.getCurrentNavigation().extras.state?.data;

    return !data?.nextStep ? this.router.navigateByUrl('/entel/soap')
      .then(() => false) : true;
  }
}
