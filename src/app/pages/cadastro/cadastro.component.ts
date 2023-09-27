import { Component } from '@angular/core';
import { FormularioService } from 'src/app/Core/services/formulario.service';
import { CadastroService } from './../../Core/services/cadastro.service';
import { PessoaUsuaria } from 'src/app/Core/types/types';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})


export class CadastroComponent {
  perfilComponent=false;

  constructor(
    private formularioSevice: FormularioService,
    private cadastroService: CadastroService
    ){}

  cadastrar(){
    const formCadastro = this.formularioSevice.getCadastro()

    if(formCadastro?.valid){
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria;
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) =>{
          console.log("cadastro realizado", value)
        },
        error: (err)=>{
          console.log("Erro ao cadastrar", err)
        }
      })
    }

  }
}


