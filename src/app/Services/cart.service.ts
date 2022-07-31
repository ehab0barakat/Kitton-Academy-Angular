import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Models/iproduct';
import { ProdSelect } from '../Models/prod-select';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  selections: ProdSelect[] = [];

  add(product: IProduct, quantity: number, image: string): void {
    const existing = this.selections.find(existingSelection => existingSelection.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    }
    else {
      this.selections.push({ product: product, quantity: quantity , image: image});
    }
  }

  changeQuantity(product: IProduct, quantity: number, image: string): void {
    const existing = this.selections.find(existingSelection => existingSelection.product.id === product.id);
    if (existing) {
      existing.quantity = quantity;
    }
    else {
      this.selections.push({ product: product, quantity: quantity, image: image });
    }
  }

  remove(product: IProduct): void {
    this.selections = this.selections.filter(currentSelection => currentSelection.product.id !== product.id);
  }

  empty(): void {
    this.selections = [];
  }

  count(): number {
    return this.selections.map((selection) => selection.quantity).reduce((sum, quantity) => sum += quantity, 0);
  }



  // 
  
  createNewCart(model:any) {
    return this.http.post(environment.APIBaseURL + 'carts' , model )
  }
}
