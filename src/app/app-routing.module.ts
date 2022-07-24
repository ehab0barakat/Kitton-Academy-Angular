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
import { SinglePostComponent } from './Components/posts/single-post/single-post.component';

const routes: Routes = [
  {path : "home" , component: HomeComponent},
  {path : "games-archive" , component: GamesComponent},
  {path : "single-game" , component: SingleGameComponent},  // gonna be changed >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  {path:'posts',component:PostsComponent},
  {path:'single-post',component:SinglePostComponent},
  {path:'contact_us',component:ContactUsComponent},
  {path:'about_us',component:AboutUsComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
