import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProdSelectService {

  constructor() { }

  product: IProduct | undefined;
  quantity: number | undefined;
}
