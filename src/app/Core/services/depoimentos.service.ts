import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Depoimentos } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class DepoimentosService {

  private apiUrl: string = environment.apiUrl;


  constructor(
    private httpClient: HttpClient
  ) { }

  listar (): Observable<Depoimentos[]>{
    return this.httpClient.get<Depoimentos[]>(`${this.apiUrl}/depoimentos`)
  }
}
