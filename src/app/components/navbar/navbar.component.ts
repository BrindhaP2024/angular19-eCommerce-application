import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { ProductService } from '../../services/products.service';
import { product,cart } from '../../interfaces/data-type';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, SearchComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuType: string = 'default';
  userName: string = '';
  cartItems = 0;
  menuOpen: boolean = false;

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    const admin = JSON.parse(sessionStorage.getItem('admin') || '{}');

    if (user && user.firstName) {
      this.userName = user.firstName;
      this.menuType = 'user';
      this.productService.getCartList(user.id);
    } else if (admin && admin.firstName) {
      this.userName = admin.firstName;
      this.menuType = 'admin';
    } else {
      this.menuType = 'default';
    }

    // Subscribe to cart data changes
    this.productService.cartData.subscribe((items: string | any[]) => {
      this.cartItems = items.length;
    });
  }

  userLogout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('admin');
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
    this.menuType = 'default';
  }
  // toggleMenu(): void {
  //   const menu = document.querySelector('.nav-menu');
  //   if (menu) {
  //     menu.classList.toggle('active');
  //   }
  // }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
