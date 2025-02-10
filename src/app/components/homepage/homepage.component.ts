import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  providers: [DataService, HttpClient],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  imports: [CommonModule, AboutComponent]
})
export class HomepageComponent implements OnInit {

  products: any[] = [];

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
}
