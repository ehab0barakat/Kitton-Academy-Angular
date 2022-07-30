import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProdSelect } from 'src/app/Models/prod-select';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';
import { CartcalculatorService } from 'src/app/Services/cartcalculator.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  id: number = 0;
  product: IProduct | undefined;
  prdIDList: number[] = [];
  prodListOfCat: IProduct[] = [];
  // 
  constructor(
    private router: Router,
    public cart: CartService,
    private prodService: ProductsService,
    private cartCalculator: CartcalculatorService,
    private activatedRoute: ActivatedRoute
  ) {}

  prod = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  ngOnInit(): void {
    this.prodService.getProductByID(this.prod).subscribe((response) => {
      this.product = response;
      console.log(this.product);
    });
  }

  // 
  subTotal(): number {
    return this.cartCalculator.calculateSubTotal(this.cart);
  }

  remove(product: IProduct): void {
    this.cart.remove(product);
  }

  onQuantityChange(selection: ProdSelect, quantity: any) {
    if (quantity > 0) {
      selection.quantity = quantity;
    }
    else {
      selection.quantity = 1;
    }
  }
}
