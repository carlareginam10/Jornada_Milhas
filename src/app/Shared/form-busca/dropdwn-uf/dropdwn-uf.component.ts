import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { startWith } from 'rxjs/internal/operators/startWith';
import { UnidadeFederativaService } from 'src/app/Core/services/unidade-federativa.service';
import { UnidadeFederativa } from 'src/app/Core/types/types';

@Component({
  selector: 'app-dropdwn-uf',
  templateUrl: './dropdwn-uf.component.html',
  styleUrls: ['./dropdwn-uf.component.scss']
})
export class DropdwnUfComponent implements OnInit {
  //abordagens diferentes mas que tem o mesmo efeito de string incializada vazia
  @Input()  label!: string;
  @Input() iconePrefixo: string= '';
  @Input() control!: FormControl;
  @Input() placeholder: string = '';

  unidadesFederativas: UnidadeFederativa [] = [];

  filteredOptions$?: Observable<UnidadeFederativa[]>;

  constructor(private unidadeFederativaService: UnidadeFederativaService){

  }
  ngOnInit(): void {
    this.unidadeFederativaService.listar()
    .subscribe(dados => {
      this.unidadesFederativas = dados
      console.log(this.unidadesFederativas)

    })
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this.filtrarUfs(value))
    )
  }

  filtrarUfs(value: string): UnidadeFederativa[] {
    const valorFiltrado = value?.toLowerCase();
    const result = this.unidadesFederativas.filter(
      estado => estado.nome.toLowerCase().includes(valorFiltrado)
    )
    return result
  }
}





