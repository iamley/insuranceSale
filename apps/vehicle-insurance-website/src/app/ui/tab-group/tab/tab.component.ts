import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'viws-tab',
  templateUrl: './tab.component.html',
})
export class TabComponent implements OnInit {

  @ViewChild('innerTemplate')
  innerTemplate: TemplateRef<any>

  @Input()
  title: string;

  isActive: boolean;

  constructor() {}

  ngOnInit() {}

}
