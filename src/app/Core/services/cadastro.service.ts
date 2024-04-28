import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { PessoaUsuaria } from 'src/app/Core/types/types';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  cadastrar(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria> {
    return this.http.post<PessoaUsuaria>(`${this.apiUrl}/auth/cadastro`, pessoaUsuaria);
  }
  // trecho refatorado utilizando interceptor
  // buscarCadastro(token : string): Observable<PessoaUsuaria> {
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   })
  //   return this.http.get<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`,
  //   {headers});
  // }

  buscarCadastro(): Observable<PessoaUsuaria> {

    return this.http.get<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`
    );
  }

  editarCadastro(pessoaUsuaria : PessoaUsuaria ):
  Observable<PessoaUsuaria> {

    return this.http.patch<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`,
    pessoaUsuaria);
  }

}
