import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './features/home/components/home.component';
import { LoginComponent } from './features/login/components/login.component';
import { RegisterComponent } from './features/register/components/register.component';
import { ProfileComponent } from './features/profile/components/profile.component';
import { PostComponent } from './features/post/components/post.component';
import { ListingDetailsComponent } from './features/listing-details/components/listing-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'post', component: PostComponent, canActivate: [AuthGuard] },
  {
    path: 'listing-details/:id',
    component: ListingDetailsComponent,
    canActivate: [AuthGuard],
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
