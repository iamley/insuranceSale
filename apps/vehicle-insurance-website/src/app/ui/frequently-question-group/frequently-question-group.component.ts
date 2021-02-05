import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viws-frequently-question-group',
  templateUrl: './frequently-question-group.component.html',
  styleUrls: ['./frequently-question-group.component.scss'],
})
export class FrequentlyQuestionGroupComponent implements OnInit {

  isOpen: boolean;

  constructor() { }

  ngOnInit() {}

  panelToggle() {
    this.isOpen = !this.isOpen;
  }

}
