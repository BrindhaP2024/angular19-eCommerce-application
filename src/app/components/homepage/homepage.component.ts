import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "../about/about.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  providers: [DataService, HttpClient,RouterLink,CommonModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  imports: [CommonModule, AboutComponent]
})
export class HomepageComponent implements OnInit {

  products: any[] = [];
  cart:number=0;

  constructor(private dataService: DataService) { }

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
    alert(`${product.name} has been added to your cart!`);
  }
  buyNow(product: any): void {
    alert(`You have chosen to buy ${product.name}!`);
  }
}


