import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario5 } from './formulario-5';

describe('Formulario5', () => {
  let component: Formulario5;
  let fixture: ComponentFixture<Formulario5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formulario5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formulario5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
