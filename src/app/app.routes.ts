import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { AboutComponent } from './components/about/about.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddProductComponent } from './components/addproduct/addproduct.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'homepage', pathMatch:'full' },
  { path: 'productpage', component: HomepageComponent },
  { path: 'addproduct', component: AddProductComponent },
  { path: 'updateproduct/:id', component: UpdateproductComponent},
  { path:"cartpage",component:CartPageComponent},
  { path: '**', redirectTo: 'login' } // Wildcard route redirected to 'login'
];
