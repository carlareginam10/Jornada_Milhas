import { Component, OnInit } from '@angular/core';
import { DepoimentosService } from 'src/app/Core/services/depoimentos.service';
import { Depoimentos } from 'src/app/Core/types/types';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements OnInit{
  depoimentos!: Depoimentos[];
  constructor(private depoimentoService: DepoimentosService) {
  }
  ngOnInit(): void {
    this.depoimentoService.listar().subscribe(
      res => {
        this.depoimentos = res;
      }
    )
  }
}


