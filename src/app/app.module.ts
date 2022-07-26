import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ClassesComponent } from './Components/classes/classes.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClassDetailsComponent } from './Components/class-details/class-details.component';
import { MyclassesComponent } from './Components/myclasses/myclasses.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { AlertComponent } from './Components/alert/alert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { CreateClassComponent } from './Components/create-class/create-class.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    MainLayoutComponent,
    ClassesComponent,
    ClassDetailsComponent,
    MyclassesComponent,
    CheckoutComponent,
    AlertComponent,
    CreateClassComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
