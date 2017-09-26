import { Component, OnInit, 
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes, 
  group
} from '@angular/core';
import {Contact} from './contact';


import {ContatosDatabaseService} from './contatos-database.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ContatosDatabaseService],
  // Animation
  animations: [
    trigger('tableFade', [
      state('off', style({
        transform: 'translateX(-300%)'
      })),
      state('on', style({
        transform: 'translateX(0%)'
      })),
      transition('off => on', [animate('.5s', style({transform: 'rotate(15deg)'}))]),
      transition('on => off', [animate('.5s')]),
    ])
  ]
  //Animation
})

export class FormComponent implements OnInit {

  tableState: string = "off";

  contatos: Contact[];


  errorMessage: string;

  data: Contact;
  constructor(private contatosDatabaseService: ContatosDatabaseService) { 
    this.data = new Contact();
  }

  enviar(): void{
    this.contatosDatabaseService.setContato(this.data);
    
  }

  mostraTabela(){
    this.tableState = (this.tableState === "off") ? "on" : "off";
  }

  retornaContatosApi(){
    this.contatosDatabaseService.getContatosApi()
    .subscribe(
      response => console.log(this.contatos = response),
      error => this.errorMessage = error
    );
    
  }

  ngOnInit() {
    this.contatos = this.contatosDatabaseService.getContatos();
  }

}
