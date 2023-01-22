import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import hexRgb from 'hex-rgb';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DecoratorService {
  constructor(private httpClient: HttpClient) {}

  public getAttribute(callback: (attribute: string) => string): string {
    return callback("You're xom-tastic!");
  }

  public getHiddenMessage(): Observable<string> {
    return this.httpClient
      .get<string[]>('/hex-colors')
      .pipe(
        map((response: string[]): string => this.getMessageFromHex(response))
      );
  }

  private getMessageFromHex(hexData: string[]): string {
    const codes: number[] = hexData
      // drop alpha and get RGB values
      .map((hex: string): number[] => {
        const { alpha, ...rgb } = hexRgb(hex);
        return Object.values(rgb);
      })
      // flatten hex codes 2-dimensional array
      .reduce((accumulator, array) => {
        return [...accumulator, ...array];
      }, []);

    const uniqueHexCodes: number[] = Array.from(
      // unique codes
      new Set<number>(
        codes
          // sort codes in descending order
          .sort((a: number, b: number): number => (a > b ? -1 : 1))
      )
    );
    // get char codes for unique codes
    return String.fromCharCode(...uniqueHexCodes);
  }
}
