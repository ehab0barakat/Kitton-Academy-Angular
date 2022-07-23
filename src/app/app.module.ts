import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GamesComponent } from './Components/Games/games/games.component';
import { SingleGameComponent } from './Components/Games/single-game/single-game.component';
import { EventsArchiveComponent } from './Components/Events/events-archive/events-archive.component';
import { EventsSingleComponent } from './Components/Events/events-single/events-single.component';
import { HomeComponent } from './Components/home/home.component';
import { CrudGameComponent } from './Components/Games/crud-game/crud-game.component';
import { CrudEventComponent } from './Components/Events/crud-event/crud-event.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ProductComponent } from './Components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GamesComponent,
    SingleGameComponent,
    EventsArchiveComponent,
    EventsSingleComponent,
    HomeComponent,
    CrudGameComponent,
    CrudEventComponent,
    ShopComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
