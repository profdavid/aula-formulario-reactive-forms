import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formulario1 } from './forms/formulario1/formulario1';
import { Formulario2 } from './forms/formulario2/formulario2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Formulario1, Formulario2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula-formulario-reactive-forms');
}
