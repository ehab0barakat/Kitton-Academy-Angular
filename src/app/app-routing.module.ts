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
import { SinglePostComponent } from './Components/posts/single-post/single-post.component';
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
import { AddPostComponent } from './Components/posts/Posts_Crud/add-post/add-post.component';
import { UpdatePostComponent } from './Components/posts/Posts_Crud/update-post/update-post.component';
import { DeletePostComponent } from './Components/posts/Posts_Crud/delete-post/delete-post.component';
import { ShowPostComponent } from './Components/posts/Posts_Crud/show-post/show-post.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SingleTeacherComponent } from './Components/single-teacher/single-teacher.component';
import { TeachersComponent } from './Components/teachers/teachers.component';
import { SignOutComponent } from './Components/sign-out/sign-out.component';
import { SlachpageComponent } from './Components/slachpage/slachpage.component';
import { CrudCatClassComponent } from './Components/Class/crud-cat-class/crud-cat-class.component';
import { AddCatClassComponent } from './Components/Class/crud-cat-class/add-cat-class/add-cat-class.component';
import { UpdateCatClassComponent } from './Components/Class/crud-cat-class/update-cat-class/update-cat-class.component';
import { DeleteCatClassComponent } from './Components/Class/crud-cat-class/delete-cat-class/delete-cat-class.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductListComponent } from './Components/Admin/product-list/product-list.component';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';
import { UpdateProductComponent } from './Components/Admin/update-product/update-product.component';
import { DeleteProductComponent } from './Components/Admin/delete-product/delete-product.component';
import { EventCatsIndexComponent } from './Components/event-cats-crud/event-cats-index/event-cats-index.component';
import { EventCatsUpdateComponent } from './Components/event-cats-crud/event-cats-update/event-cats-update.component';
import { EventCatsDeleteComponent } from './Components/event-cats-crud/event-cats-delete/event-cats-delete.component';
import { EventCatsAddComponent } from './Components/event-cats-crud/event-cats-add/event-cats-add.component';
import { AdminControlComponent } from './Components/Events/admin-control/admin-control.component';
import { EditProfileComponent } from './Components/Profile/edit-profile/edit-profile.component';
import { PostingComponent } from './Components/posts/Posts_Crud/posting/posting.component';
import { AdminHeaderComponent } from './Components/admin_view/admin-header/admin-header.component';
import { DashboardComponent } from './Components/admin_view/dashboard/dashboard.component';
import { AdminMainLayoutComponent } from './Components/admin_view/admin-main-layout/admin-main-layout.component';
import { SlachAdminComponent } from './Components/slach-admin/slach-admin.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'games-archive', component: GamesComponent },
      { path: 'single-game', component: SingleGameComponent },
      { path: 'posts', component: PostsComponent },

      // ------------------------ (  event crud start  )   -----------------------------
      { path: 'events-archive', component: EventsArchiveComponent },
      { path: 'event/:id', component: EventsSingleComponent },
      { path: 'event-index', component: CrudEventComponent },
      { path: 'event-add', component: EventAddComponent },
      { path: 'event-update/:id', component: EventUpdateComponent },
      { path: 'event-delete/:id', component: EventDeleteComponent },
      // ------------------------ (  event crud start  )   -----------------------------

      // ------------------------shop page ----------------------------------//
      { path: 'shop', component: ShopComponent },
      { path: 'cart', component: CartComponent },
      { path: 'cart/:id', component: CartComponent },
      { path: 'Products', component: ProductsComponent },
      { path: 'ProductList', component: ProductListComponent },
      { path: 'AddNewProduct', component: AddProductComponent },
      { path: 'productDetails', component: ProductDetailsComponent },
      { path: 'UpdateProduct/:id', component: UpdateProductComponent },
      { path: 'DeleteProduct/:id', component: DeleteProductComponent },
      { path: 'productDetails/:id', component: ProductDetailsComponent },

      // --------------------------------------------------------------------//

      {path:'post-index',component:PostsComponent},
      {path:'show-post',component:ShowPostComponent},
      {path:'single-post/:id',component:SinglePostComponent},
      {path:'update-post/:id',component:UpdatePostComponent},
      // {path:'posting',component:AddPostComponent},
      {path:'posting',component:PostingComponent},
      {path:'delete-post/:id',component:DeletePostComponent},
      {path:'contact_us',component:ContactUsComponent},
      {path:'about_us',component:AboutUsComponent},
    
  // -------------------------------------------------//

      {path:'profile',component:ProfileComponent},
      {path:'edit-profile',component:EditProfileComponent},
      {path : "teachers" , component:TeachersComponent},
      {path : "single-teacher/:id" , component:SingleTeacherComponent},
      {path : "sign-in" , component:SignInComponent},
      {path : "sign-up" , component:SignUpComponent},
      {path : "form-teacher" , component:FormTeacherComponent},
      {path : "sign-up as teacher" , component:SignupAsteacherComponent},
      {path : "sign-out" , component:SignOutComponent},
      {path : "Welcome" , component:WelcomeComponent},
      {path : "submit-admin" , component:SigninAsadminComponent},
      {path:'classes',component:CatClassComponent},
      {path: 'classes/:id',component:DetailsClassComponent},
      {path: 'classes-index',component:CrudClassComponent},
      {path : "classes-add" , component: AddClassComponent},
      {path : "classes-delete/:id" , component: DeleteClassComponent},
      {path : "classes-update/:id" , component: UpdateClassComponent},
      {path: 'classescat-index',component:CrudCatClassComponent},
      {path : "classescat-add" , component: AddCatClassComponent},
      {path : "classescat-update/:id" , component: UpdateCatClassComponent},
      {path : "classescat-delete/:id" , component: DeleteCatClassComponent},
      {path: 'checkout/:id',component:CheckoutComponent},
      {path:'slachAdmin',component:SlachAdminComponent},


  // -------------------------------------------------//

]},

{path:'admin',component:AdminMainLayoutComponent,children:[

  {path : "home" , component: HomeComponent},
  {path:'contact_us',component:ContactUsComponent},
  {path:'about_us',component:AboutUsComponent},
  {path:'profile',component:ProfileComponent},
  {path : "event-control" , component: AdminControlComponent},
  {path : "event-control/event/:id" , component: EventsSingleComponent},
  {path : "event/:id" , component: EventsSingleComponent},
  {path : "events-archive" , component: EventsArchiveComponent},
  {path:'eventcats-index',component:EventCatsIndexComponent},
  {path:'eventcats-add',component:EventCatsAddComponent},
  {path:'eventcats-update/:id',component:EventCatsUpdateComponent},
  {path:'eventcats-delete/:id',component:EventCatsDeleteComponent},

]},

  {path:'admin-sign',component:SigninAsadminComponent},
  {path:'slachpage',component:SlachpageComponent},
  {path:'**',component:NotFoundComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
