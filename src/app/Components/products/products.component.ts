import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
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
  currentPrdID: number = 0;
  prodListOfCat: IProduct[] = [];
  prod: IProduct | undefined = undefined;

  products: IProduct[] = [];
  productAdded!: IProduct | null;

  quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //
  @Input() data: any = {};
  @Input() receivedID: number = 0;
  @Output() product = new EventEmitter();
  constructor(
    private cart: CartService,
    private prodService: ProductsService,
    private router: Router
  ) {}
  //

  ngOnChanges(): void {
    console.log(this.receivedID);

    this.prodService
      .getProductsByCatID(this.receivedID)
      .subscribe((response) => {
        this.prodListOfCat = response;
        console.log(response);
      });
    //
    this.prodService.getProductByID(this.currentPrdID).subscribe((response) => {
      console.log(response);
    });
    //
    this.prodService.getAllProducts().subscribe((response) => {
      this.prodListOfCat = response;
      console.log(this.prodListOfCat);
    });
  }
  //

  add() {
    this.product.emit(this.data);
  }

  // openProductDetails(prodID: number) {
  //   this.router.navigate(['Products', prodID]);
  // }

  ngOnInit() {
    this.prodService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  addToCart(product: IProduct, quantity: number, image: string): void {
    this.cart.add(product, quantity, image);
    this.productAdded = product;
  }

  clearAdd(): void {
    this.productAdded = null;
  }
}
