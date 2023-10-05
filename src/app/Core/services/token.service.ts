import { Injectable } from '@angular/core';

const KEY = 'token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  salvarToken(token: string){
    return localStorage.setItem(KEY, token)
  }

  excluirToken(){
    localStorage.removeItem(KEY)
  }

  retornarToken(){
    return localStorage.getItem(KEY) ?? "" //a interrrogação serve para retornar uma string vazia caso não tenha token
  }
// o retornarToken retorna uma string então usamos duas exclamações para converter para boleano
  possuiToken(){
    return !!this.retornarToken()
  }


}
