import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-4',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-4.html',
  styleUrl: './formulario-4.css',
})
export class Formulario4 {
  private fb = inject(FormBuilder);

  formulario = this.fb.group({
    nome: [''],
    endereco: this.fb.group({
      logradouro: [''],
      numero: [''],
      bairro: [''],
    })
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
