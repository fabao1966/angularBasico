import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';

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

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)])

  })

}
