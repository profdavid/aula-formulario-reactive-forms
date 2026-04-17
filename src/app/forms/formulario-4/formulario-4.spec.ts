import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario4 } from './formulario-4';

describe('Formulario4', () => {
  let component: Formulario4;
  let fixture: ComponentFixture<Formulario4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formulario4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formulario4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
