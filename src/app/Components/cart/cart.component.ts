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
  total: number = 0;
  success: boolean = false;
  cartProducts: any[] = [];

  constructor(
    private router: Router,
    public CartService: CartService,
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

    this.getCartProducts();
  }
  // -------------------------------------------------------------------------------//

  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    } this.getCartTotal();

    console.log(this.cartProducts);
  }

  getCartTotal() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total +=
        this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }
  // 
  addAmount(index: number) {
    this.cartProducts[index].quantity++;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  minsAmount(index: number) {
    this.cartProducts[index].quantity--;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  detectChange() {
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  // 
  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  clearCart() {
    this.cartProducts = [];
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  //--------------------------------------------------------------------------------------//

  // backend:
  addCart() {
    let products = this.cartProducts.map((item) => {
      return { productId: item.item.id, quantity: item.quantity };
    });

    let Model = {
      userId: 5,
      products: products,
    };

    this.CartService.createNewCart(Model).subscribe((res) => {
      this.success = true;
    });

    console.log(Model);
  }
}
