import { TestBed } from '@angular/core/testing';

import { AppIntercepterService } from './app-intercepter.service';

describe('AppIntercepterService', () => {
  let service: AppIntercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppIntercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
