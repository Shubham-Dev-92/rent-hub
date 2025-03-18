import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './features/home/components/home.component';
import { LoginComponent } from './features/login/components/login.component';
import { RegisterComponent } from './features/register/components/register.component';
import { ProfileComponent } from './features/profile/components/profile.component';
import { PostComponent } from './features/post/components/post.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'post', component: PostComponent },
  // { path: 'post-listing', component: PostListingComponent, canActivate: [AuthGuard] },
  // { path: 'listing/:id', component: ListingDetailsComponent, canActivate: [AuthGuard] },
  // { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
