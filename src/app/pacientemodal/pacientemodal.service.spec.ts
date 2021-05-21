import { TestBed } from '@angular/core/testing';

import { PacientemodalService } from './pacientemodal.service';

describe('PacientemodalService', () => {
  let service: PacientemodalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacientemodalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
