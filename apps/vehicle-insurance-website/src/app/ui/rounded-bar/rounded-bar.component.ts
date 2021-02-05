import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'viws-rounded-bar',
  templateUrl: './rounded-bar.component.html'
})
export class RoundedBarComponent implements OnInit {

  @HostBinding('class') get _style() { return 'container' }

  constructor() { }

  ngOnInit() {}

}
