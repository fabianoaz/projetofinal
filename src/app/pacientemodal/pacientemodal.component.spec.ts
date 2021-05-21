import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientemodalComponent } from './pacientemodal.component';

describe('PacientemodalComponent', () => {
  let component: PacientemodalComponent;
  let fixture: ComponentFixture<PacientemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientemodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
