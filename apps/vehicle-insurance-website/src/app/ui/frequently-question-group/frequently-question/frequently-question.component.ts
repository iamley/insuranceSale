import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FrequentlyQuestion } from '../frequently-question';

@Component({
  selector: 'viws-frequently-question',
  templateUrl: './frequently-question.component.html',
  styleUrls: ['./frequently-question.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FrequentlyQuestionComponent implements OnInit {

  @Input()
  frequentlyQuestion: FrequentlyQuestion

  constructor() { }

  ngOnInit() {}

}
