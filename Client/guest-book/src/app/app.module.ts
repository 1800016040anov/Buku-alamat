import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import material module 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TambahAlamatComponent } from './tambah-alamat/tambah-alamat.component';
import { DetailAlamatComponent } from './detail-alamat/detail-alamat.component';
import { DialogKonfirmasiComponent } from './dialog-konfirmasi/dialog-konfirmasi.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    TambahAlamatComponent,
    DetailAlamatComponent,
    DialogKonfirmasiComponent,
    LoginComponent,
    HomeComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule



  ],
  entryComponents: [
    TambahAlamatComponent,
    DetailAlamatComponent,
    DialogKonfirmasiComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
