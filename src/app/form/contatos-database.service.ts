import { Injectable } from '@angular/core';
import {Contact} from './contact';

@Injectable()
export class ContatosDatabaseService {

  banco: Contact[] = [];

  setContato(novoContato: Contact){
    this.banco.push(novoContato);
    console.log(this.banco);
  }

  

  constructor() { }

}
