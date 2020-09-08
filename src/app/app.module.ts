import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlelistComponent } from './articlelist/articlelist.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddaricelComponent } from './addaricel/addaricel.component';
import { FormsModule } from '@angular/forms'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import  {NgxPaginationModule} from 'ngx-pagination'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { MyCartComponent } from './my-cart/my-cart.component'; 
const material=[
  MatPaginatorModule
]; 
@NgModule({
  declarations: [
    AppComponent,
    ArticlelistComponent,
    EditarticleComponent,
    AddaricelComponent,
    PostsComponent,
    HeaderComponent,
    HeroComponent,
    MyCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
