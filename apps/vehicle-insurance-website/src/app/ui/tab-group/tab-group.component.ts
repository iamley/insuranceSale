import {AfterViewInit, Component, ContentChildren, OnInit, QueryList, ViewEncapsulation} from '@angular/core';
import {TabComponent} from "./tab/tab.component";

@Component({
  selector: 'viws-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  host: {
    'class': 'viws-tab-group'
  },
  encapsulation: ViewEncapsulation.None
})
export class TabGroupComponent implements OnInit, AfterViewInit {

  tab_active = 0;

  @ContentChildren(TabComponent) _tabs: QueryList<TabComponent>;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    if(this._tabs.first)
      this._tabs.first.isActive = true;
  }

  onChangeTab(i: number) {
    this._tabs.forEach(tab => tab.isActive = false)
    this._tabs.toArray()[i].isActive = true;
    this.tab_active = i;
  }
}

