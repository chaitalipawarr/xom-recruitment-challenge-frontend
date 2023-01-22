import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-xom-input',
  templateUrl: './xom-input.component.html',
  styleUrls: ['./xom-input.component.scss'],
})
export class XomInputComponent implements OnInit {
  @Input() public inputValue: string = '';

  public inputControl: FormControl = new FormControl(this.inputValue, [
    Validators.required,
    Validators.pattern(new RegExp(`${this.inputValue}`)),
  ]);
  public matcher: InputErrorStateMatcher = new InputErrorStateMatcher();

  ngOnInit(): void {
    this.inputControl.setValue(this.inputValue);
  }
}

export class InputErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
