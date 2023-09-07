import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuscaService } from './../../Core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBucaComponent {



  constructor(public dialog: MatDialog,
    public formBuscaService: FormBuscaService) {}

  openDialog() {
    this.dialog.open(ModalComponent);
  }

}
