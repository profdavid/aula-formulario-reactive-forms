import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario1',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario1.html',
  styleUrl: './formulario1.css',
})
export class Formulario1 {
  nome = new FormControl('');

  limparNome() {
    this.nome.setValue('');
  }
}
