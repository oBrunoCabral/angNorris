import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderMComponent } from './header-m/header-m.component';
import { MainMComponent } from './main-m/main-m.component';
import { FooterMComponent } from './footer-m/footer-m.component';
import { PostagemComponent } from './postagem/postagem.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    HeaderMComponent,
    MainMComponent,
    FooterMComponent,
    PostagemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
