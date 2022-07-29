import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  prodListOfCat: IProduct[] = [];

  constructor(
    private router: Router,
    private prodService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.prodService.getAllProducts().subscribe((response) => {
      this.prodListOfCat = response;
      console.log(this.prodListOfCat);
    });
  }

  openUpdateProduct(prodID: number) {
    this.router.navigate(['ProductList', prodID]);
  }
  openDeleteProduct(prodID: number) {
    this.router.navigate(['ProductList', prodID]);
  }
}
