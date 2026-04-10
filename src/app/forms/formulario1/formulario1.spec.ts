import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario1 } from './formulario1';

describe('Formulario1', () => {
  let component: Formulario1;
  let fixture: ComponentFixture<Formulario1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formulario1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formulario1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
