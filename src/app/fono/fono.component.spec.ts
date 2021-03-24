import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonoComponent } from './fono.component';

describe('FonoComponent', () => {
  let component: FonoComponent;
  let fixture: ComponentFixture<FonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FonoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
