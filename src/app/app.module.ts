import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { PostsComponent } from './Components/posts/posts/posts.component';
import { SinglePostComponent } from './Components/posts/single-post/single-post.component';
import { ProfileComponent } from './Components/Profile/profile/profile.component';
import { GamesComponent } from './Components/Games/games/games.component';
import { SingleGameComponent } from './Components/Games/single-game/single-game.component';
import { EventsArchiveComponent } from './Components/Events/events-archive/events-archive.component';
import { EventsSingleComponent } from './Components/Events/events-single/events-single.component';
import { HomeComponent } from './Components/home/home.component';
import { CrudGameComponent } from './Components/Games/crud-game/crud-game.component';
import { CrudEventComponent } from './Components/Events/crud-event/crud-event.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './Components/product/product.component';
import { ShopComponent } from './Components/shop/shop.component';
import { SubEventComponent } from './Components/Events/sub-event/sub-event.component';
import { EventAddComponent } from './Components/Events/crud-event/event-add/event-add.component';
import { EventUpdateComponent } from './Components/Events/crud-event/event-update/event-update.component';
import { EventDeleteComponent } from './Components/Events/crud-event/event-delete/event-delete.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { MyclassesComponent } from './Components/myclasses/myclasses.component';
import { CrudClassComponent } from './Components/Class/crud-class/crud-class.component';
import { AddClassComponent } from './Components/Class/crud-class/add-class/add-class.component';
import { UpdateClassComponent } from './Components/Class/crud-class/update-class/update-class.component';
import { DeleteClassComponent } from './Components/Class/crud-class/delete-class/delete-class.component';
import { CatClassComponent } from './Components/Class/cat-class/cat-class.component';
import { FilteredClassComponent } from './Components/Class/filtered-class/filtered-class.component';
import { DetailsClassComponent } from './Components/Class/details-class/details-class.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent,
    PostsComponent,
    SinglePostComponent,
    ProfileComponent,
    GamesComponent,
    SingleGameComponent,
    EventsArchiveComponent,
    EventsSingleComponent,
    EventDeleteComponent,
    HomeComponent,
    CrudGameComponent,
    CrudEventComponent,
    NotFoundComponent,
    MainLayoutComponent,
    MyclassesComponent,
    CheckoutComponent,
    ShopComponent,
    ProductComponent,
    SubEventComponent,
    EventAddComponent,
    EventUpdateComponent,
    CrudClassComponent,
    AddClassComponent,
    UpdateClassComponent,
    DeleteClassComponent,
    CatClassComponent,
    FilteredClassComponent,
    DetailsClassComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],
  // providers: [ { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
