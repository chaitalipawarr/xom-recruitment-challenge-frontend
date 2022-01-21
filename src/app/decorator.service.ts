import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecoratorService {
  public getAttribute(
    callback: (attribute: string) => string
  ) {
    return callback("You're xom-tastic!");
  }
}
