import { Component, inject } from '@angular/core';
import { ProdutoService } from '../../servico/produto.service';
import { Observable } from 'rxjs';
import { Produto } from '../../models/Produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

  private produtoService = inject(ProdutoService);

  produtos$ = new Observable<Produto[]>();
  btnCadastrar: boolean = true;

  constructor(){
    this.selecionar();
  }

  selecionar(){
    this.produtos$ = this.produtoService.selecionar();
  }

}
