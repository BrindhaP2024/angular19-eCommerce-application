import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ProductDetailsComponent } from "./components/productdetails/productdetails.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AddProductComponent } from "./components/addproduct/addproduct.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, ToastModule, NavbarComponent, AddProductComponent, HomeComponent],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular real time application';
}
