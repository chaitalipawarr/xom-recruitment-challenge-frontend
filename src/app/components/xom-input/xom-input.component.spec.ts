import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { XomInputComponent } from './xom-input.component';

describe('XomInputComponent', () => {
  let component: XomInputComponent;
  let fixture: ComponentFixture<XomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XomInputComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create custom Input component', () => {
    expect(component).toBeTruthy();
  });

  it('should show "XOM" as input value', () => {
    // arrange
    const inputMessage = 'XOM';
    component.inputValue = inputMessage;
    // act
    component.ngOnInit();
    const input = fixture.debugElement.query(By.css('input'));
    // assert
    expect(component.inputControl.value).toEqual(inputMessage);
    expect(input.nativeElement.value).toEqual(inputMessage);
  });

  it('should test input validity as required field', () => {
    const inputMessage = '';
    component.inputValue = inputMessage;
    component.ngOnInit();
    expect(component.inputControl.hasError('required')).toBeTruthy();
  });
});
