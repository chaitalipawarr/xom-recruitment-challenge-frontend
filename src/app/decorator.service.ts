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

  public fetchHexColor(): Observable<string> {
    return this.httpClient
      .get<string[]>('/hex-colors')
      .pipe(
        map((rawResponse: string[]): string => this.formatHexData(rawResponse))
      );
  }

  private formatHexData(rawResponse: string[]): string {
    const data: number[] = Array.from(
      new Set<number>(
        rawResponse
          .map((hex: string): number[] => {
            const { alpha, ...rgb } = hexRgb(hex);
            return Object.values(rgb);
          })
          .flat()
          .sort((a: number, b: number): number => (a > b ? -1 : 1))
      )
    );
    return String.fromCharCode(...data);
  }
}
