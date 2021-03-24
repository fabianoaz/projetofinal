import { TestBed } from '@angular/core/testing';

import { PsicomotricidadeService } from './psicomotricidade.service';

describe('PsicomotricidadeService', () => {
  let service: PsicomotricidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsicomotricidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
