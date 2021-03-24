import { TestBed } from '@angular/core/testing';
import { EscolaregularClass } from './escolaregular';

import { EscolaregularService } from './escolaregular.service';

describe('EscolaregularService', () => {
  let service: EscolaregularService;

  let teste: EscolaregularClass;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscolaregularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Validação', () =>{
    teste.data = new Date();
    teste.atendimento = "ABCDEF";
    teste.orientacao = "GHIJKLMNO";
    service.addInfo(teste);

    var atend = service.getInfos();
    console.log(service.getInfos());
  })
});
