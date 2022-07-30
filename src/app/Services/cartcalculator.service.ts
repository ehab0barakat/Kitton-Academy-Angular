import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class CartcalculatorService {
  [x: string]: any;

  constructor() {}

  calculateSubTotal(ca: CartService) {
    let sum = 0;
    for (let selection of ca.selections) {
      sum += selection.product.price * selection.quantity;
    }
    return sum;
  }
}
