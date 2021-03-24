import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaregularComponent } from './escolaregular.component';

describe('EscolaregularComponent', () => {
  let component: EscolaregularComponent;
  let fixture: ComponentFixture<EscolaregularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolaregularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolaregularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
