import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  cadatroForm: FormGroup | null = null

  getCadastro (): FormGroup | null{
    return this.cadatroForm
  }

  setCadastro (form: FormGroup){
    this.cadatroForm = form;
  }


}
