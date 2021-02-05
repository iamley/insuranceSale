import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedBarComponent } from './rounded-bar.component';

describe('RoundedBarComponent', () => {
  let component: RoundedBarComponent;
  let fixture: ComponentFixture<RoundedBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundedBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
