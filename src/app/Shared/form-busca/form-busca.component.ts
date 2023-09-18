import { Component } from '@angular/core';

import { FormBuscaService } from './../../Core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBucaComponent {



  constructor(
    public formBuscaService: FormBuscaService) {}



}
