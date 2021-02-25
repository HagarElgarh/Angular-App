import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import{AngularFireModule} from '@angular/fire'
import{AngularFireDatabaseModule} from '@angular/fire/database'
import{environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule, } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {MatCardModule} from '@angular/material/card';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatGridListModule} from '@angular/material/grid-list';


import {CarouselModule} from 'ngx-owl-carousel-o';
import { SignDialogComponent } from './components/sign-dialog/sign-dialog.component'







@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    HomeComponent,
    AboutusComponent,
    HeaderComponent,
    NotfoundComponent,
    SignDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    CarouselModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatDialogModule,
    AngularFireAuthModule,
    MatCardModule,
    IvyCarouselModule,
    MatGridListModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
