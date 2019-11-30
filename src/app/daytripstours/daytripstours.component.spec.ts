import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaytripstoursComponent } from './daytripstours.component';

describe('DaytripstoursComponent', () => {
  let component: DaytripstoursComponent;
  let fixture: ComponentFixture<DaytripstoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaytripstoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaytripstoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
