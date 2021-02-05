import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Observable } from "rxjs";
import { first, tap } from "rxjs/operators";

import { Store } from "@ngrx/store";
import { VehiclePartialState } from "../+state/vehicle/vehicle.reducer";
import * as TypeVehicleActions from '../+state/vehicle/type-vehicle/type-vehicle.actions';

@Injectable({providedIn: 'root'})
export class VehicleResolver implements Resolve<any> {

  constructor(private store$: Store<VehiclePartialState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.store$.pipe(
      first(),
      tap(() => this.store$.dispatch(TypeVehicleActions.loadTypeVehicle())),
    );
  }
}
