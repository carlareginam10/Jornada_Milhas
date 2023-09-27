import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  autenticar(email: string, senha: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, senha })
  }

}
