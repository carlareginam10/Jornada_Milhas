import { Component, Input, OnInit } from '@angular/core';
import { Depoimentos } from 'src/app/Core/types/types';


@Component({
  selector: 'app-card-depoimentos',
  templateUrl: './card-depoimentos.component.html',
  styleUrls: ['./card-depoimentos.component.scss']
})
export class CardDepoimentosComponent   {

 @Input() depoimento!: Depoimentos;
}
