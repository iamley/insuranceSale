import { Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { OwnerSummaryComponent } from '@vehicle-insurance-website/ui/owner-summary/owner-summary.component';
import { VehicleSummaryComponent } from '@vehicle-insurance-website/ui/vehicle-summary/vehicle-summary.component';
import { LicensePlatePriceEntity } from '@mfe-vehicle-insurance/shared/models';

@Component({
  selector: 'viws-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {

  @ContentChildren(OwnerSummaryComponent)
  ownerSummary: QueryList<OwnerSummaryComponent>;

  @ContentChildren(VehicleSummaryComponent)
  vehicleSummary: QueryList<VehicleSummaryComponent>;

  @Input()
  licensePlateTotal: LicensePlatePriceEntity;

  constructor() { }

  ngOnInit() {}

  get hasOfferPrice() {
    return this.licensePlateTotal?.offerPrice;
  }

}
