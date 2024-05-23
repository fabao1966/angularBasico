import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})

export class ProdutoService {
  //url:string = 'http://localhost:3000/produtos';
  private url = environment.urlApi;

  private http = inject(HttpClient);

  selecionar():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url);
  }

  cadastrar(obj:Produto):Observable<Produto>{
    return this.http.post<Produto>(this.url, obj);
  }

  alterar(obj:Produto):Observable<Produto>{
    return this.http.put<Produto>(`${this.url}/${obj.id}`, obj);
  }

  remover(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }

}
