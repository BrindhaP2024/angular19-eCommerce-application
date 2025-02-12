import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/products.service';
import { product,cart } from '../../interfaces/data-type';

@Component({
  selector: 'app-homepage',
  standalone: true,
  providers: [DataService, HttpClient, RouterLink, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  imports: [CommonModule]
})
export class HomepageComponent implements OnInit {
  products: any[] = [];
  cart: number = 0;

  constructor(private dataService: DataService, private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.dataService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  trackByProductId(index: number, product: any): number {
    return product.id;
  }

  addToCart(product: any): void {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    const userId = user.id;
    if (userId) {
      const cartData: cart = {
        ...product,
        productId: product.id,
        userId
      };
      delete cartData.id;
      this.productService.addToCart(cartData).subscribe((result) => {
        if (result) {
          alert(`${product.name} has been added to your cart!`);
          this.productService.getCartList(userId); // Update cart list
        }
      });
    } else {
      alert('Please login to add items to your cart.');
    }
  }

  buyNow(product: any): void {
    alert(`You have chosen to buy ${product.name}!`);
  }
}
