import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent {
  inputUsuario = '';
  Paragrafotext = '';

  atualizarParagrafo() {
    this.Paragrafotext = this.inputUsuario;
  }

  atualizarBotao(){
    const botao = document.querySelector('.primeiro-botao')
    botao?.classList.toggle('botao-clique');
  }
} 
