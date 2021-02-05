import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { OwnerEntity } from '@mfe-vehicle-insurance/shared/models';

@Component({
  selector: 'viws-owner-summary',
  templateUrl: './owner-summary.component.html',
})
export class OwnerSummaryComponent implements OnInit {

  @ViewChild('ownerSummaryTemplate')
  ownerSummaryTemplate: TemplateRef<any>

  @Input()
  owner: OwnerEntity;

  constructor() { }

  ngOnInit() {}

}
