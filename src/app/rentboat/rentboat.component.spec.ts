import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentboatComponent } from './rentboat.component';

describe('RentboatComponent', () => {
  let component: RentboatComponent;
  let fixture: ComponentFixture<RentboatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentboatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentboatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
