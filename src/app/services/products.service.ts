import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { product, cart } from '../interfaces/data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private cartApiUrl = 'http://localhost:3000/cart';
  private productApiUrl = 'http://localhost:3000/products';

  cartData = new BehaviorSubject<cart[]>([]);

  constructor(private http: HttpClient) {}

  // Method to fetch all products (get the list of products)
  getProductList(): Observable<product[]> {
    return this.http.get<product[]>(this.productApiUrl);
  }

  // Method to fetch a single product by ID
  getProduct(id: string): Observable<product> {
    return this.http.get<product>(`${this.productApiUrl}/${id}`);
  }

  // Method to update a product
  updateProduct(product: product): Observable<product> {
    return this.http.put<product>(`${this.productApiUrl}/${product.id}`, product);
  }

  // Method to delete a product
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.productApiUrl}/${id}`);
  }

  // Add to Cart method
  addToCart(data: cart): Observable<cart> {
    return this.http.post<cart>(this.cartApiUrl, data);
  }

  // Fetch Cart List
  getCartList(userId: number): void {
    this.http.get<cart[]>(`${this.cartApiUrl}?userId=${userId}`).subscribe((result) => {
      this.cartData.next(result);
    });
  }

  // Remove from Cart method
  removeToCart(cartId: number): Observable<void> {
    return this.http.delete<void>(`${this.cartApiUrl}/${cartId}`);
  }
  // helps to fetch current cart data when the logged in user adds to the cart
  currentCart(userId:number):Observable<cart[]>{
    return this.http.get<cart[]>(`${this.cartApiUrl}?userId=${userId}`);
  }


}

