import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import hexRgb from 'hex-rgb'; // as example 

import { DecoratorService } from './decorator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public greeting = "Hello fellow recruitment!";
  private isTask7 = false;

  constructor(
    private http: HttpClient,
    private decoratorService: DecoratorService,
  ) {
    const rgbColorCodeExample = hexRgb('FFFFFF');
    console.log('rgbColorCodeExample:', rgbColorCodeExample);

    if (this.isTask7) {
      this.enrichWelcomeText();
    }
  }

  private enrichWelcomeText() {
    const enrichedContent = this.decoratorService.getAttribute(
      this.joinAttribute
    );
  }

  private joinAttribute(attribute: string) {
    return this.greeting + attribute;
  }
}
