import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';

@Component({
  selector: 'app-xom-input',
  templateUrl: './xom-input.component.html',
  styleUrls: ['./xom-input.component.scss'],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
})
export class XomInputComponent implements OnInit {
  @Input() public inputValue: string = '';

  public inputControl: FormControl = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.inputControl.addValidators(Validators.pattern(`${this.inputValue}`));
    this.inputControl.setValue(this.inputValue);
    this.inputControl.updateValueAndValidity();
  }
}
