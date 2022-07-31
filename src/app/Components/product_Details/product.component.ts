import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  prdIDList: number[] = [];
  product: IProduct | undefined ;
  prodListOfCat: IProduct[] = [];

  constructor(
    private router: Router,
    private prodService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  prod = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  ngOnInit(): void {
    this.prodService.getProductByID(this.prod).subscribe((response) => {
      this.product = response;

      
      console.log(this.product);
    });

  }

}
