import { Component } from '@angular/core';
import { FormularioService } from 'src/app/Core/services/formulario.service';
import { CadastroService } from './../../Core/services/cadastro.service';
import { PessoaUsuaria } from 'src/app/Core/types/types';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})


export class CadastroComponent {
  perfilComponent=false;

  constructor(
    private formularioSevice: FormularioService,
    private cadastroService: CadastroService,
    private router : Router
    ){}

  cadastrar(){

    const formCadastro = this.formularioSevice.getCadastro()
    console.log("cadastro realizado", formCadastro)
    if(formCadastro?.valid){
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria;
      console.log(novoCadastro)
      this.cadastroService.cadastrar(novoCadastro).subscribe({
         next: (value) =>{
           console.log("cadastro realizado", value);
           this.router.navigate(['/login'])
         },
        error: (err)=>{
          console.log("Erro ao cadastrar", err)
         }
       })
     }

  }
}


