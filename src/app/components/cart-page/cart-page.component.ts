import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart, priceSummary } from '../../interfaces/data-type';
import { ProductService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  imports: [CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
  
})
export class CartPageComponent implements OnInit {
  cartData: cart[] | undefined;
  priceSummary: priceSummary = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  }

  constructor(private product: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadDetails();
  }

  removeToCart(cartId: number | undefined): void {
    if (cartId && this.cartData) {
      this.product.removeToCart(cartId).subscribe(() => {
        this.loadDetails();
      });
    }
  }

  loadDetails(): void {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    const userId = user.id;
    if (userId) {
      this.product.currentCart(userId).subscribe((result) => {
        this.cartData = result;
        console.warn(this.cartData);
        let price = 0;
        result.forEach((item) => {
          if (item.quantity) {
            price += (+item.price * +item.quantity);
          }
        });
        this.priceSummary.price = price;
        this.priceSummary.discount = price * 0.1;
        this.priceSummary.tax = price * 0.18;
        this.priceSummary.delivery = 100;
        this.priceSummary.total = price - this.priceSummary.discount + this.priceSummary.tax + this.priceSummary.delivery;

        if (!this.cartData.length) {
          this.router.navigate(['/']);
        }
      });
    }
  }

  checkout(): void {
    this.router.navigate(['/checkout']);
  }
}
