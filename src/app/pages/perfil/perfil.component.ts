import { Component, OnInit } from '@angular/core';
import { PessoaUsuaria } from 'src/app/Core/types/types';
import { TokenService } from './../../Core/services/token.service';
import { CadastroService } from './../../Core/services/cadastro.service';
import { FormGroup } from '@angular/forms';
import { FormularioService } from 'src/app/Core/services/formulario.service';
import { UserService } from 'src/app/Core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  titulo = 'Olá ';
  textoBotao = 'ATUALIZAR';
  perfilComponent = true;

  cadastro!: PessoaUsuaria;
  token: string = '';
  nome: string = '';
  form!: FormGroup<any> | null;

  constructor(
    private cadastroService: CadastroService,
    private tokenService: TokenService,
    private formularioService: FormularioService,
    private userService: UserService,
    private router: Router
  ) { }


  ngOnInit() {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarCadastro(this.token).subscribe(cadastro => {
      this.cadastro = cadastro;
      this.nome = cadastro.nome;
      this.carregarFormulario();
    })
  }

  carregarFormulario(){
    this.form = this.formularioService.getCadastro();
    this.form?.patchValue({
      nome: this.cadastro.nome,
      nascimento: this.cadastro.nascimento,
      cpf: this.cadastro.cpf,
      telefone: this.cadastro.telefone,
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      genero: this.cadastro.genero,
      cidade: this.cadastro.cidade,
      estado: this.cadastro.estado

    })

  }



  atualizar(){
    const dadosAtualizados = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      telefone: this.form?.value.telefone,
      email: this.form?.value.email,
      senha: this.form?.value.senha,
      genero: this.form?.value.genero,
      cidade: this.form?.value.cidade,
      estado: this.form?.value.estado
    }
    this.cadastroService.editarCadastro(dadosAtualizados, this.token).subscribe({
      next: () => {
        alert('Cadastro editado com sucesso')
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


  deslogar(){
    this.userService.logout();
    this.router.navigate(['/login'])
    console.log("Atualização realizada com sucesso")
  }
}
