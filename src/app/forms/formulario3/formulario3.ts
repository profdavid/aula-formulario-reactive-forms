import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario3.html',
  styleUrl: './formulario3.css',
})
export class Formulario3 {
  formulario = new FormGroup({
    novoTelefone: new FormControl(''),
    telefones: new FormArray([
      //new FormControl('11999999999'),
    ]),
  });

  get telefones() : FormArray{
    return this.formulario.get('telefones') as FormArray;
  }

  addTelefone() {
    const valor = this.formulario.get('novoTelefone')?.value;
    this.telefones.push(new FormControl(valor));
    // this.formulario.get('novoTelefone')?.reset();
    this.formulario.get('novoTelefone')?.setValue('');
  }

  removeTelefone(index: number) {
    this.telefones.removeAt(index);
  }
}
