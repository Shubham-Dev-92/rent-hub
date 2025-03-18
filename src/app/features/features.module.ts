import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomeComponent } from './home/components/home.component';
import { LoginComponent } from './login/components/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/components/register.component';
import { ProfileComponent } from './profile/components/profile.component';
import { PostComponent } from './post/components/post.component';
import { ListingDetailsComponent } from './listing-details/components/listing-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PostComponent,
    ListingDetailsComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HomeComponent],
})
export class FeaturesModule {}
