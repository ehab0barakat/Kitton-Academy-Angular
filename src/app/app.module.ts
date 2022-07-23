import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { PostsComponent } from './Components/posts/posts/posts.component';
import { SinglePostComponent } from './Components/posts/single-post/single-post.component';
import { ProfileComponent } from './Components/Profile/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent,
    PostsComponent,
    SinglePostComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
