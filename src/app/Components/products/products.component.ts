import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  prodList: IProduct[] = [];
   // 
  productAdded!: IProduct | null;
  quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //
  @Input() receivedID: number = 0;
  constructor(
    private cart: CartService,
    private prodService: ProductsService,
    private router: Router
  ) {}

  
    // ------------------------------fillter------------------------------------//
  ngOnChanges(): void {
    console.log(this.receivedID);

    this.prodService.getProductsByCatID(this.receivedID).subscribe((products) => {
        this.prodList = products;
        console.log(products);
      });
    //

    this.prodService.getAllProducts().subscribe((response) => {
      this.prodList = response;
      console.log(this.prodList);
    });
  }
  //---------------------------------------------------------------------------------//

  ngOnInit() {
    this.prodService.getProducts()
      .subscribe((products) => (this.prodList = products));
  }


  // addToCart(product: IProduct, quantity: number, image: string): void {
  //   this.cart.add(product, quantity, image);
  //   this.productAdded = product;
  // }

  // clearAdd(): void {
  //   this.productAdded = null;
  // }

  // ---------------------------------------------------
  // amount: number = 0;
  @Input() data!: IProduct;
  @Output() item = new EventEmitter();

  add() {
    this.item.emit({ item: this.data});
  }
}
