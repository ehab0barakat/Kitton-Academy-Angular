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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassesComponent } from './Components/classes/classes.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './Components/product/product.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ClassDetailsComponent } from './Components/class-details/class-details.component';
import { SubEventComponent } from './Components/Events/sub-event/sub-event.component';
import { EventAddComponent } from './Components/Events/crud-event/event-add/event-add.component';
import { EventUpdateComponent } from './Components/Events/crud-event/event-update/event-update.component';
import { EventDeleteComponent } from './Components/Events/crud-event/event-delete/event-delete.component';
import { UpdatePostComponent } from './Components/posts/Posts_Crud/update-post/update-post.component';
import { AddPostComponent } from './Components/posts/Posts_Crud/add-post/add-post.component';
import { DeletePostComponent } from './Components/posts/Posts_Crud/delete-post/delete-post.component';
import { ShowPostComponent } from './Components/posts/Posts_Crud/show-post/show-post.component';

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
    HomeComponent,
    CrudGameComponent,
    CrudEventComponent,
    NotFoundComponent,
    MainLayoutComponent,
    ClassesComponent,
    ClassDetailsComponent,
    ShopComponent,
    ProductComponent,
    ClassDetailsComponent,
    SubEventComponent,
    EventAddComponent,
    EventUpdateComponent,
    EventDeleteComponent,
    UpdatePostComponent,
    AddPostComponent,
    DeletePostComponent,
    ShowPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
