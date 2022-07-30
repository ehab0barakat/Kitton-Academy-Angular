import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { CategoriesService } from 'src/app/Services/categories.service';
import { ProductsService } from 'src/app/Services/products.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  selectedID: number = 0;
  CategoryProducts: Icategory[] = [];
  prodListOfCat: IProduct[] = [];
  prod: IProduct | undefined = undefined;

  @ViewChild(ProductsComponent) productsRef!: ProductsComponent;
  constructor(
    private router: Router,
    private prodService: ProductsService,
    private CatService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.CatService.getAllCategories().subscribe((response) => {
      this.CategoryProducts = response;
      console.log(this.CategoryProducts);
    });

    //
    this.prodService.getAllProducts().subscribe((response) => {
      this.prodListOfCat = response;
      console.log(this.prodListOfCat);
    });
  }

  prodcatid(id: number) {
    this.selectedID = id;
  }
}
