import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

import { VehicleEntity } from '@mfe-vehicle-insurance/shared/models';

@Component({
  selector: 'viws-vehicle-summary',
  templateUrl: './vehicle-summary.component.html',
})
export class VehicleSummaryComponent implements OnInit {

  @ViewChild('vehicleSummaryTemplate')
  vehicleSummaryTemplate: TemplateRef<any>;

  @Input()
  vehicle: VehicleEntity;

  flexFillClass$ = this.breakpointObserver.observe([Breakpoints.Web, Breakpoints.Tablet])
    .pipe(
      map(breakPoint => breakPoint.matches ?
        'flex-fill-30' : 'flex-fill-70'
      )
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {}

}
