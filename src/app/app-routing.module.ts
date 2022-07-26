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
import { ClassesComponent } from './Components/classes/classes.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ProductComponent } from './Components/product/product.component';
import { CartComponent } from './Components/cart/cart.component';
import { EventsArchiveComponent } from './Components/Events/events-archive/events-archive.component';
import { EventsSingleComponent } from './Components/Events/events-single/events-single.component';
import { CrudEventComponent } from './Components/Events/crud-event/crud-event.component';
import { EventAddComponent } from './Components/Events/crud-event/event-add/event-add.component';
import { EventUpdateComponent } from './Components/Events/crud-event/event-update/event-update.component';
import { EventDeleteComponent } from './Components/Events/crud-event/event-delete/event-delete.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SingleTeacherComponent } from './Components/single-teacher/single-teacher.component';
import { TeachersComponent } from './Components/teachers/teachers.component';
import { FormTeacherComponent } from './Components/form-teacher/form-teacher.component';
import { SignupAsteacherComponent } from './Components/signup-asteacher/signup-asteacher.component';
import { SigninAsadminComponent } from './Components/signin-asadmin/signin-asadmin.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';


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
  {path:'cart',component:CartComponent},
  {path:'shop',component:ShopComponent},
  {path:'product',component:ProductComponent},
  {path:'classes',component:ClassesComponent},
  {path : "teachers" , component:TeachersComponent},
  {path : "single-teacher/:id" , component:SingleTeacherComponent},
  {path : "sign-in" , component:SignInComponent},
  {path : "sign-up" , component:SignUpComponent},
  {path : "form-teacher" , component:FormTeacherComponent},
  {path : "sign-up as teacher" , component:SignupAsteacherComponent},
  {path : "submit-admin" , component:SigninAsadminComponent},
  {path : "Welcome" , component:WelcomeComponent},


]},
{path:'**',component:NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
