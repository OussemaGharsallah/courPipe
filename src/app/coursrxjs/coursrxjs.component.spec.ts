import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursrxjsComponent } from './coursrxjs.component';

describe('CoursrxjsComponent', () => {
  let component: CoursrxjsComponent;
  let fixture: ComponentFixture<CoursrxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursrxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursrxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
