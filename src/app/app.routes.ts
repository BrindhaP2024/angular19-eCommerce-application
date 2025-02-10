import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { AboutComponent } from './components/about/about.component';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  {path:'about',component:AboutComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'productpage',component:HomepageComponent}
];
