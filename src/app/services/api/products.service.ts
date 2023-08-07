import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/product');
  }

  addProduct(product: IProduct): Observable<any> {
    return this.http.post<any>('http://localhost:8080/product', product);
  }
}
