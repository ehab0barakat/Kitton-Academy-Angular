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
// import { ProductComponent } from './Components/product/product.component';
import { ProductDetailsComponent } from './Components/product_Details/product.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ProductsComponent } from './Components/products/products.component';
import { CommonModule } from '@angular/common';
// import { SubEventComponent } from './Components/Events/sub-event/sub-event.component';
// import { EventAddComponent } from './Components/Events/crud-event/event-add/event-add.component';
// import { EventUpdateComponent } from './Components/Events/crud-event/event-update/event-update.component';
// import { EventDeleteComponent } from './Components/Events/crud-event/event-delete/event-delete.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { MyclassesComponent } from './Components/Class/myclasses/myclasses.component';
import { CrudClassComponent } from './Components/Class/crud-class/crud-class.component';
import { AddClassComponent } from './Components/Class/crud-class/add-class/add-class.component';
import { UpdateClassComponent } from './Components/Class/crud-class/update-class/update-class.component';
import { DeleteClassComponent } from './Components/Class/crud-class/delete-class/delete-class.component';
import { CatClassComponent } from './Components/Class/cat-class/cat-class.component';
import { FilteredClassComponent } from './Components/Class/filtered-class/filtered-class.component';
import { UpdatePostComponent } from './Components/posts/Posts_Crud/update-post/update-post.component';
import { AddPostComponent } from './Components/posts/Posts_Crud/add-post/add-post.component';
import { DeletePostComponent } from './Components/posts/Posts_Crud/delete-post/delete-post.component';
import { ShowPostComponent } from './Components/posts/Posts_Crud/show-post/show-post.component';
// import { ClassDetailsComponent } from './Components/class-details/class-details.component';
import { TeachersComponent } from './Components/teachers/teachers.component';
import { SingleTeacherComponent } from './Components/single-teacher/single-teacher.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { FormTeacherComponent } from './Components/form-teacher/form-teacher.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { SignupAsteacherComponent } from './Components/signup-asteacher/signup-asteacher.component';
import { SigninAsadminComponent } from './Components/signin-asadmin/signin-asadmin.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { SignOutComponent } from './Components/sign-out/sign-out.component';
import { SlachpageComponent } from './Components/slachpage/slachpage.component';
import { CrudCatClassComponent } from './Components/Class/crud-cat-class/crud-cat-class.component';
import { AddCatClassComponent } from './Components/Class/crud-cat-class/add-cat-class/add-cat-class.component';
import { UpdateCatClassComponent } from './Components/Class/crud-cat-class/update-cat-class/update-cat-class.component';
import { DeleteCatClassComponent } from './Components/Class/crud-cat-class/delete-cat-class/delete-cat-class.component';
import { DetailsClassComponent } from './Components/Class/details-class/details-class.component';

import { UpdateProductComponent } from './Components/Admin/update-product/update-product.component';
import { DeleteProductComponent } from './Components/Admin/delete-product/delete-product.component';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';
import { ProductListComponent } from './Components/Admin/product-list/product-list.component';
import { EditProfileComponent } from './Components/Profile/edit-profile/edit-profile.component';
import { GameCatsIndexComponent } from './Components/game-cats-crud/game-cats-index/game-cats-index.component';
import { GameCatsAddComponent } from './Components/game-cats-crud/game-cats-add/game-cats-add.component';
import { GameCatsUpdateComponent } from './Components/game-cats-crud/game-cats-update/game-cats-update.component';
import { GameCatsDeleteComponent } from './Components/game-cats-crud/game-cats-delete/game-cats-delete.component';
import { EventCatsIndexComponent } from './Components/event-cats-crud/event-cats-index/event-cats-index.component';
import { EventCatsAddComponent } from './Components/event-cats-crud/event-cats-add/event-cats-add.component';
import { EventCatsUpdateComponent } from './Components/event-cats-crud/event-cats-update/event-cats-update.component';
import { EventCatsDeleteComponent } from './Components/event-cats-crud/event-cats-delete/event-cats-delete.component';
import { AdminControlComponent } from './Components/Events/admin-control/admin-control.component';
import { PostingComponent } from './Components/posts/Posts_Crud/posting/posting.component';
import { AdminHeaderComponent } from './Components/admin_view/admin-header/admin-header.component';
import { DashboardComponent } from './Components/admin_view/dashboard/dashboard.component';
import { AdminMainLayoutComponent } from './Components/admin_view/admin-main-layout/admin-main-layout.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AddTeacherComponent } from './Components/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './Components/edit-teacher/edit-teacher.component';
import { DeleteTeacherComponent } from './Components/delete-teacher/delete-teacher.component';

import { SubEventComponent } from './Components/Events/sub-event/sub-event.component';
import { EventAddComponent } from './Components/Events/crud-event/event-add/event-add.component';
import { EventUpdateComponent } from './Components/Events/crud-event/event-update/event-update.component';
import { EventDeleteComponent } from './Components/Events/crud-event/event-delete/event-delete.component';
import { SlachAdminComponent } from './Components/slach-admin/slach-admin.component';
import { AddComponent } from './Components/class-content/add/add.component';
import { ContentArchiveComponent } from './Components/class-content/content-archive/content-archive.component';
import { ContentUpdataComponent } from './Components/class-content/content-updata/content-updata.component';
import { ContentDeleteComponent } from './Components/class-content/content-delete/content-delete.component';
import { ContentIndexComponent } from './Components/class-content/content-index/content-index.component';
import { ContentSingleComponent } from './Components/class-content/content-single/content-single.component';

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
    DetailsClassComponent,
    ShopComponent,
    // ProductComponent,
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
    EventDeleteComponent,
    UpdatePostComponent,
    AddPostComponent,
    DeletePostComponent,
    ShowPostComponent,
    // ProductComponent,
    // ClassDetailsComponent,
    TeachersComponent,
    SingleTeacherComponent,
    SignInComponent,
    SignUpComponent,
    FormTeacherComponent,
    PaymentComponent,
    SignupAsteacherComponent,
    SigninAsadminComponent,
    WelcomeComponent,
    SignOutComponent,
    SlachpageComponent,
    CrudCatClassComponent,
    AddCatClassComponent,
    UpdateCatClassComponent,
    DeleteCatClassComponent,
    // ClassesComponent,
    // ClassDetailsComponent,
    SubEventComponent,
    EventAddComponent,
    EventUpdateComponent,
    EventDeleteComponent,
    ShopComponent,
    ProductsComponent,
    AddProductComponent,
    ProductListComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ProductDetailsComponent,
    EditProfileComponent,
    GameCatsIndexComponent,
    GameCatsAddComponent,
    GameCatsUpdateComponent,
    GameCatsDeleteComponent,
    EventCatsIndexComponent,
    EventCatsAddComponent,
    EventCatsUpdateComponent,
    EventCatsDeleteComponent,
    AdminControlComponent,
    PostingComponent,
    AdminHeaderComponent,
    DashboardComponent,
    AdminMainLayoutComponent,
    AddTeacherComponent,
    EditTeacherComponent,
    DeleteTeacherComponent,
    SubEventComponent,
    EventAddComponent,
    EventUpdateComponent,
    EventDeleteComponent,
    SlachAdminComponent,
    AddComponent,
    ContentArchiveComponent,
    ContentUpdataComponent,
    ContentDeleteComponent,
    ContentIndexComponent,
    ContentSingleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgxDropzoneModule


  ],
  // providers: [ { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
