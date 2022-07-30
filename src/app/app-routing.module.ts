import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { PostsComponent } from './Components/posts/posts/posts.component';
import { ProfileComponent } from './Components/Profile/profile/profile.component';
import { AppComponent } from './app.component';
import { GamesComponent } from './Components/Games/games/games.component';
import { SingleGameComponent } from './Components/Games/single-game/single-game.component';
import { HomeComponent } from './Components/home/home.component';
import { ClassDetailsComponent } from './Components/class-details/class-details.component';
import { ClassesComponent } from './Components/classes/classes.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ProductDetailsComponent } from './Components/product_Details/product.component';
import { CartComponent } from './Components/cart/cart.component';
import { EventsArchiveComponent } from './Components/Events/events-archive/events-archive.component';
import { EventsSingleComponent } from './Components/Events/events-single/events-single.component';
import { CrudEventComponent } from './Components/Events/crud-event/crud-event.component';
import { EventAddComponent } from './Components/Events/crud-event/event-add/event-add.component';
import { EventUpdateComponent } from './Components/Events/crud-event/event-update/event-update.component';
import { EventDeleteComponent } from './Components/Events/crud-event/event-delete/event-delete.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductListComponent } from './Components/Admin/product-list/product-list.component';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';
import { UpdateProductComponent } from './Components/Admin/update-product/update-product.component';
import { DeleteProductComponent } from './Components/Admin/delete-product/delete-product.component';

const routes: Routes = [
  {path: '',component:MainLayoutComponent,children:[
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path : "home" , component: HomeComponent},
  {path : "games-archive" , component: GamesComponent},
  {path : "events-archive" , component: EventsArchiveComponent},
  {path : "event-add" , component: EventAddComponent},
  {path : "event-update/:id" , component: EventUpdateComponent},
  {path : "event-delete/:id" , component: EventDeleteComponent},
  {path : "event-index" , component: CrudEventComponent},
  {path : "event/:id" , component: EventsSingleComponent},
  {path : "single-game" , component: SingleGameComponent},
  {path:'posts',component:PostsComponent},
  {path:'contact_us',component:ContactUsComponent},
  {path:'about_us',component:AboutUsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'classes',component:ClassesComponent},
 
  // -------------------------------------------------//
  {path:'shop',component:ShopComponent},
  {path:'cart',component:CartComponent},
  {path:'cart/:id',component:CartComponent},
  {path:'Products',component:ProductsComponent},
  {path:'ProductList',component:ProductListComponent},
  {path:'AddNewProduct',component:AddProductComponent},
  {path:'productDetails',component:ProductDetailsComponent},
  {path:'UpdateProduct/:id',component:UpdateProductComponent},
  {path:'DeleteProduct/:id',component:DeleteProductComponent},
  {path:'productDetails/:id',component:ProductDetailsComponent},
  // -------------------------------------------------//

  {path:'classes',component:ClassesComponent},
  {path: 'classes/:id',component:ClassDetailsComponent}
]},
{path:'**',component:NotFoundComponent},
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
