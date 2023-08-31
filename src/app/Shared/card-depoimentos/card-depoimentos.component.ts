import { Component } from '@angular/core';

@Component({
  selector: 'app-card-depoimentos',
  templateUrl: './card-depoimentos.component.html',
  styleUrls: ['./card-depoimentos.component.scss']
})
export class CardDepoimentosComponent {
  depoimento: string = `Recomento fortemene a agencia de viagens
  Jornada. Eles oferecem um serviço personalizado e de alta qualidade
  que superou minhas expectativas`

  autoria: string = 'Maria Faustino'

}
