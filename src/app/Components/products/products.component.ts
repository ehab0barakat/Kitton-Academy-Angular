import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { Icategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  [x: string]: any;
  currentPrdID: number = 0;
  prodListOfCat: IProduct[] = [];
  prod: IProduct | undefined = undefined;

  //
  @Input() receivedID: number = 0;
  constructor(private prodService: ProductsService, private router: Router) {}

  ngOnChanges(): void {
    this.prodService.getProductByID(this.currentPrdID).subscribe((response) => {
      console.log(response);
    });
  }
  ngOnInit(): void {
    this.prodService.getAllProducts().subscribe((response) => {
      this.prodListOfCat = response;
      console.log(this.prodListOfCat);
    });

    // this.prodService.getAllCategories().subscribe((response) => {
    //   this.CategoryProducts = response;
    //   console.log(this.CategoryProducts);
    // });
  }

  openProductDetails(prodID: number) {
    this.router.navigate(['Products', prodID]);
  }

  // private getprodCat() {
  //   if (this.receivedID == 0) {
  //     this.prodListOfCat = Array.from(this.productList);
  //     return;
  //   }
  //   this.prodCat = this.productList.filter(
  //     (prod) => prod.CateogryID == this.receivedID
  //   );
  // }
}
