import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { Pessoa } from '../../models/Pessoa';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  exibirTabela: boolean = false;
  btnCadastrar: boolean = true;

  pessoas: Pessoa[] = [];

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)])

  })

  cadastrar(){
    this.pessoas.push(this.formulario.value as Pessoa);

    this.formulario.reset();

    this.exibirTabela = true;

    console.table(this.pessoas);
  }

}
