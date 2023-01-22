import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DecoratorService } from '../services/decorator.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import mockServerResponse from '../mock-server/mock-server-response.json';

describe('DecoratorService', () => {
  let service: DecoratorService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const httpClientSpyObj = jasmine.createSpyObj('HttpClient', {
      get: of(mockServerResponse.hexColors),
    });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DecoratorService,
        {
          provide: HttpClient,
          useValue: httpClientSpyObj,
        },
      ],
    });
    service = TestBed.inject(DecoratorService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch hex colors array and return hidden message', (done: DoneFn) => {
    let str = '';
    const getMessageFromHexSpy = spyOn<any>(
      service,
      'getMessageFromHex'
    ).and.callThrough();

    service.getHiddenMessage().subscribe({
      next: (res) => {
        expect(res).toEqual('XOM');
        done();
      },
      error: () => done.fail,
    });
    expect(getMessageFromHexSpy).toHaveBeenCalledTimes(1);
  });
});
