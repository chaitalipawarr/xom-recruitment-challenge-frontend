import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

import mockServerResponse from './mock-server-response.json';

@Injectable()
export class MockServerInterceptor implements HttpInterceptor {
  private readonly hexColors = mockServerResponse.hexColors;

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.isHexColorRequest(request)) {
      return this.respondHexColors();
    }

    return next.handle(request);
  }

  private isHexColorRequest(request: HttpRequest<unknown>): boolean {
    if (
      request.method === 'GET' &&
      request.url === '/hex-colors' &&
      Array.isArray(this.hexColors)
    ) {
      return true;
    }

    return false;
  }

  private respondHexColors(): Observable<HttpResponse<string[]>> {
    return of(
      new HttpResponse({
        status: 200,
        body: this.hexColors,
      })
    );
  }
}
