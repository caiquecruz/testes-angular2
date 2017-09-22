import { Component, OnInit } from '@angular/core';
import {Contact} from './contact';

import {ContatosDatabaseService} from './contatos-database.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ContatosDatabaseService]
})

export class FormComponent implements OnInit {

  data: Contact;
  // _nome: string;
  // _telefone: string;

  // listaDeContatos: Contact[] = [{
  //   'nome':'caique',
  //   'telefone':'1211313'
  // }];

  listaDeContas: Contact[] = [];

  constructor(private contatosDatabaseService: ContatosDatabaseService) { 
    this.data = new Contact();
    // this._nome = this.data.nome;
    // this._telefone = this.data.telefone;
  }

  enviar(): void{
    this.contatosDatabaseService.setContato(this.data);
  }

  ngOnInit() {
    
  }

}
