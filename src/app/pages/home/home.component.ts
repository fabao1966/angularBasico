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
  indice:number = -1;
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

  selecionar(indice:number){
    this.formulario.setValue({
      nome: this.pessoas[indice].nome,
      idade: this.pessoas[indice].idade,
      cidade: this.pessoas[indice].cidade
    });

    this.btnCadastrar = false;
  }

  alterar(){
    this.pessoas[this.indice] = this.formulario.value as Pessoa;
     //console.log(this.formulario.value);
    this.formulario.reset();
    this.btnCadastrar = true;
  }

  remover(){
    this.pessoas.splice(this.indice, 1);
    this.formulario.reset();
    this.btnCadastrar = true;
  }

  cancelar(){
    this.formulario.reset();
    this.btnCadastrar = true;
  }

}
