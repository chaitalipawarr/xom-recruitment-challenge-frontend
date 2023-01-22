import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DecoratorService } from './services/decorator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private isTask7: boolean = true;
  public greeting: string = 'Hello fellow recruitment!';
  public inputString$!: Observable<string>;
  public enrichedContent: string = '';

  constructor(private decoratorService: DecoratorService) {
    if (this.isTask7) {
      this.enrichWelcomeText();
    }
    this.decodeInputString();
  }

  private enrichWelcomeText(): void {
    // fix(task-7): use arrow function to fix context issue
    this.enrichedContent = this.decoratorService.getAttribute(
      (attribute: string) => this.joinAttribute(attribute)
    );
  }

  private joinAttribute(attribute: string): string {
    return `${this.greeting}${attribute}`;
  }

  private decodeInputString(): void {
    this.inputString$ = this.decoratorService.getHiddenMessage();
  }
}
