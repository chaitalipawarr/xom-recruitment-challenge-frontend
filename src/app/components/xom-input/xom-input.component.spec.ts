import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XomInputComponent } from './xom-input.component';

describe('XomInputComponent', () => {
  let component: XomInputComponent;
  let fixture: ComponentFixture<XomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XomInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
