import { TestBed } from '@angular/core/testing';

import { ImgSearchService } from './imgsearch.service';

describe('ImgsearchService', () => {
  let service: ImgSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
