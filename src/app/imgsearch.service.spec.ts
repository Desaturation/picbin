import { TestBed } from '@angular/core/testing';

import { ImgsearchService } from './imgsearch.service';

describe('ImgsearchService', () => {
  let service: ImgsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
