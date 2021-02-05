import { Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';

import { LicensePlatePriceEntity } from '@mfe-vehicle-insurance/shared/models';

import { OwnerSummaryComponent } from '@vehicle-insurance-website/ui/owner-summary/owner-summary.component';
import { VehicleSummaryComponent } from '@vehicle-insurance-website/ui/vehicle-summary/vehicle-summary.component';

@Component({
  selector: 'viws-order-summary-card',
  templateUrl: './order-summary-card.component.html',
  styleUrls: ['./order-summary-card.component.scss']
})
export class OrderSummaryCardComponent implements OnInit {

  @ContentChildren(OwnerSummaryComponent)
  ownerSummary: QueryList<OwnerSummaryComponent>;

  @ContentChildren(VehicleSummaryComponent)
  vehicleSummary: QueryList<VehicleSummaryComponent>;2

  @Input()
  licensePlatePrice: LicensePlatePriceEntity;

  constructor() { }

  ngOnInit() {}

}
