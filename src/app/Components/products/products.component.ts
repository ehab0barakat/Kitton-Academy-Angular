import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  currentPrdID: number = 0;
  prodListOfCat: IProduct[] = [];
  prod: IProduct | undefined = undefined;

  //
  @Input() receivedID: number = 0;
  constructor(private prodService: ProductsService, private router: Router) {}

  ngOnChanges(): void {
    this.prodService.getProductsByCatID(this.receivedID).subscribe((response) => {
      this.prodListOfCat = response;
      console.log(response);
    });
     // 
    this.prodService.getProductByID(this.currentPrdID).subscribe((response) => {
      console.log(response);
    });
  }
  ngOnInit(): void {
    this.prodService.getAllProducts().subscribe((response) => {
      this.prodListOfCat = response;
      console.log(this.prodListOfCat);
    });
  }

  openProductDetails(prodID: number) {
    this.router.navigate(['Products', prodID]);
  }

}
