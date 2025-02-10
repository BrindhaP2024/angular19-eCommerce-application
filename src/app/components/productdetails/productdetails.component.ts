import { Component, signal, computed, effect, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";

interface ProductData {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
  category: string;
  general: string;
  performance: string;
  display: string;
  camera: string;
  battery: string;
  stock: number;
}

@Component({
  selector: "app-product-details",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./productdetails.component.html",
  styleUrls: ["./productdetails.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  productData = signal<ProductData>({
    id: "1",
    name: "iPhone 14 Pro Max",
    price: 1099,
    image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb",
    color: "Deep Purple",
    category: "Smartphones",
    general: "Latest flagship smartphone with advanced features",
    performance: "A16 Bionic chip, 6GB RAM",
    display: "6.7-inch Super Retina XDR OLED",
    camera: "48MP main + 12MP ultra-wide + 12MP telephoto",
    battery: "4323mAh with fast charging support",
    stock: 10
  });

  quantity = signal<number>(1);
  isInCart = signal<boolean>(false);

  totalPrice = computed(() => this.productData().price * this.quantity());

  constructor() {
    effect(() => {
      console.log(`Quantity updated: ${this.quantity()}`);
      console.log(`Total price: $${this.totalPrice()}`);
    });
  }

  incrementQuantity(): void {
    if (this.quantity() < this.productData().stock) {
      this.quantity.update(q => q + 1);
    }
  }

  decrementQuantity(): void {
    if (this.quantity() > 1) {
      this.quantity.update(q => q - 1);
    }
  }

  addToCart(): void {
    if (this.productData().stock > 0) {
      this.isInCart.set(true);
      console.log(`Added ${this.quantity()} items to cart`);
    }
  }

  removeFromCart(): void {
    this.isInCart.set(false);
    this.quantity.set(1);
    console.log("Removed from cart");
  }
}
