import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { PostsComponent } from './Components/posts/posts/posts.component';
import { ProfileComponent } from './Components/Profile/profile/profile.component';
import { AppComponent } from './app.component';
import { GamesComponent } from './Components/Games/games/games.component';
import { SingleGameComponent } from './Components/Games/single-game/single-game.component';
import { HomeComponent } from './Components/home/home.component';
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
import { CrudClassComponent } from './Components/Class/crud-class/crud-class.component';
import { AddClassComponent } from './Components/Class/crud-class/add-class/add-class.component';
import { UpdateClassComponent } from './Components/Class/crud-class/update-class/update-class.component';
import { DeleteClassComponent } from './Components/Class/crud-class/delete-class/delete-class.component';
import { FilteredClassComponent } from './Components/Class/filtered-class/filtered-class.component';
import { CatClassComponent } from './Components/Class/cat-class/cat-class.component';
import { DetailsClassComponent } from './Components/Class/details-class/details-class.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { SigninAsadminComponent } from './Components/signin-asadmin/signin-asadmin.component';
import { SignupAsteacherComponent } from './Components/signup-asteacher/signup-asteacher.component';
import { FormTeacherComponent } from './Components/form-teacher/form-teacher.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SingleTeacherComponent } from './Components/single-teacher/single-teacher.component';
import { TeachersComponent } from './Components/teachers/teachers.component';
import { CrudCatClassComponent } from './Components/Class/crud-cat-class/crud-cat-class.component';
import { AddCatClassComponent } from './Components/Class/crud-cat-class/add-cat-class/add-cat-class.component';
import { UpdateCatClassComponent } from './Components/Class/crud-cat-class/update-cat-class/update-cat-class.component';
import { DeleteCatClassComponent } from './Components/Class/crud-cat-class/delete-cat-class/delete-cat-class.component';

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
    {path:'cart',component:CartComponent},
    {path:'shop',component:ShopComponent},
    {path:'product',component:ProductComponent},
    {path : "teachers" , component:TeachersComponent},
  {path : "single-teacher/:id" , component:SingleTeacherComponent},
  {path : "sign-in" , component:SignInComponent},
  {path : "sign-up" , component:SignUpComponent},
  {path : "form-teacher" , component:FormTeacherComponent},
  {path : "sign-up as teacher" , component:SignupAsteacherComponent},
  {path : "submit-admin" , component:SigninAsadminComponent},
  {path : "Welcome" , component:WelcomeComponent},
    {path:'classes',component:CatClassComponent},
    {path: 'classes/:id',component:DetailsClassComponent},
    {path: 'classes-index',component:CrudClassComponent},
    {path: 'classescat-index',component:CrudCatClassComponent},
    {path : "classes-add" , component: AddClassComponent},
    {path : "classescat-add" , component: AddCatClassComponent},
    {path : "classes-update/:id" , component: UpdateClassComponent},
    {path : "classescat-update/:id" , component: UpdateCatClassComponent},
    {path : "classes-delete/:id" , component: DeleteClassComponent},
    {path : "classescat-delete/:id" , component: DeleteCatClassComponent},
    {path: 'checkout/:id',component:CheckoutComponent},
  ]},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
