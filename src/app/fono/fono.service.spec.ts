import { TestBed } from '@angular/core/testing';

import { FonoService } from './fono.service';

describe('FonoService', () => {
  let service: FonoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
