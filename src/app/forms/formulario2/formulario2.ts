import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario2.html',
  styleUrl: './formulario2.css',
})
export class Formulario2 {
  formulario = new FormGroup({
    nome: new FormControl(''),
    endereco: new FormGroup({
      logradouro: new FormControl(''),
      numero: new FormControl(''),
      bairro: new FormControl(''),
    }),
  });

  limparNome() {
    this.formulario.patchValue({
      nome: '',
    });
  }

  limparTudo(){
    // Caso eu quisesse limpar apenas os campos de endereço
    // this.formulario.get('endereco')?.reset();
    this.formulario.reset();
  }
}
