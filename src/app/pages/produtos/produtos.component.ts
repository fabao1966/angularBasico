import { Component, inject } from '@angular/core';
import { ProdutoService } from '../../servico/produto.service';
import { Observable } from 'rxjs';
import { Produto } from '../../models/Produto';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

  private produtoService = inject(ProdutoService);

  //produtos$ = new Observable<Produto[]>();
  produtos: Produto[] = [];
  btnCadastrar: boolean = true;
  indice:number = -1;

  constructor(){
    this.selecionar();
  }

  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(''),
    valor: new FormControl(null)

  })

  selecionar(){
    //this.produtos$ = this.produtoService.selecionar();
    this.produtoService.selecionar()
    .subscribe(result => { this.produtos = result });
  }

  cadastrar(){
    this.produtoService
    .cadastrar(this.formulario.value as Produto)
    .subscribe(result =>{
      this.produtos.push(result);

      this.formulario.reset();
    });
  }

  selecionarProduto(indice:number){
    this.indice = indice;

    this.formulario.setValue({
      id: this.produtos[indice].id,
      nome: this.produtos[indice].nome,
      valor: this.produtos[indice].valor
    });

    this.btnCadastrar = false;
  }

  alterar(){
    this.produtos[this.indice] = this.formulario.value as Produto;
      this.formulario.reset();
        this.btnCadastrar = true;
  }

}
