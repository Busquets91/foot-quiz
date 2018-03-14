import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutdownTimerComponent } from './coutdown-timer.component';

describe('CoutdownTimerComponent', () => {
  let component: CoutdownTimerComponent;
  let fixture: ComponentFixture<CoutdownTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoutdownTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutdownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
