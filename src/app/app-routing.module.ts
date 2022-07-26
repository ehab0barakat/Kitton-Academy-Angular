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
import { ProductComponent } from './Components/product_Details/product.component';
import { CartComponent } from './Components/cart/cart.component';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';

const routes: Routes = [
  {path: '',component:MainLayoutComponent,children:[
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path : "home" , component: HomeComponent},
  {path : "games-archive" , component: GamesComponent},
  {path : "single-game" , component: SingleGameComponent},
  {path:'posts',component:PostsComponent},
  {path:'contact_us',component:ContactUsComponent},
  {path:'about_us',component:AboutUsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'classes',component:ClassesComponent},
  {path:'cart',component:CartComponent},
  {path:'cart/:id',component:CartComponent},
  {path:'shop',component:ShopComponent},
  {path:'product',component:ProductComponent},
  {path:'product/:id',component:ProductComponent},
  {path: 'NewProduct',component:AddProductComponent},
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
