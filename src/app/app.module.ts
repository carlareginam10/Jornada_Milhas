import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { BannerComponent } from './Shared/banner/banner.component';
import { CardComponent } from './Shared/card/card.component';
import { ContainerComponent } from './Shared/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { CardBuscaComponent } from './Shared/card-busca/card-busca.component';
import { MatCardModule } from '@angular/material/card';

import { FormBucaComponent } from './Shared/form-busca/form-busca.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ModalComponent } from './Shared/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BotaoControleComponent } from './Shared/botao-controle/botao-controle.component';
import { HttpClientModule } from '@angular/common/http';
import { PromocoesComponent } from './pages/home/promocoes/promocoes.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DropdwnUfComponent } from './Shared/form-busca/dropdwn-uf/dropdwn-uf.component';
import { DepoimentosComponent } from './pages/home/depoimentos/depoimentos.component';
import { CardDepoimentosComponent } from './Shared/card-depoimentos/card-depoimentos.component';
import { LoginComponent } from './pages/login/login.component';
import { FormBaseComponent } from './Shared/form-base/form-base.component';
import {MatRadioModule } from '@angular/material/radio';
import {MatDividerModule } from '@angular/material/divider';
import {MatCheckboxModule } from '@angular/material/checkbox';
import { CadastroComponent } from './pages/cadastro/cadastro.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardComponent,
    ContainerComponent,
    HomeComponent,
    CardBuscaComponent,
    CardDepoimentosComponent,
    FormBucaComponent,
    ModalComponent,
    BotaoControleComponent,
    PromocoesComponent,
    DropdwnUfComponent,
    DepoimentosComponent,
    LoginComponent,
    FormBaseComponent,
    CadastroComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
