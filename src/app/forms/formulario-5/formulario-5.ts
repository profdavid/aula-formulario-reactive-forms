import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

function zeroNaoPermitido(): ValidatorFn{
  return (control: AbstractControl) => {
    const valor = control.value;
    if(valor == '' || valor == null || valor == undefined) return null;

    const num = Number(valor);
    return num == 0 ? {zeroNaoPermitido: true} : null;
  };
}

function bairroNoLogradouro(): ValidatorFn{
  return (control: AbstractControl) => {
    const logradouro = String(control.get('logradouro')?.value ?? '');
    const bairro = String(control.get('bairro')?.value ?? '');

    //Nomalização
    const logradouroNorm = logradouro.trim().toLowerCase();
    const bairroNorm = bairro.trim().toLowerCase();

    return (logradouroNorm != '' && bairroNorm != '' && logradouroNorm.includes(bairroNorm)) ? {bairroNoLogradouro: true} : null;
  };
}

@Component({
  selector: 'app-formulario-5',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-5.html',
  styleUrl: './formulario-5.css',
})
export class Formulario5 {
  private fb = inject(FormBuilder);

  formulario = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    endereco: this.fb.group({
      logradouro: [''],
      numero: ['', [zeroNaoPermitido()]],
      bairro: [''],
    }, { validators: [bairroNoLogradouro()] })
  });

  get nome(){
    return this.formulario.get('nome');
  }

  get endereco(){
    return this.formulario.get('endereco');
  }

  get numero(){
    return this.endereco?.get('numero');
  }

  get bairro(){
    return this.endereco?.get('bairro');
  }

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
