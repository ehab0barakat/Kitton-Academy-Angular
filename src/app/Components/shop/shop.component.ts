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
  prodList: IProduct[] = [];
  prod: IProduct | undefined = undefined;

  @ViewChild(ProductsComponent) productsRef!: ProductsComponent;
  constructor(
    private router: Router,
    private prodService: ProductsService,
    private CatService: CategoriesService
  ) {}


  // ------------------------------fillter------------------------------------//

  prodcatid(id: number) {
    this.selectedID = id;
  }

  ngOnInit(): void {
    this.CatService.getAllCategories().subscribe((response) => {
      this.CategoryProducts = response;
      // console.log(this.CategoryProducts);
    });
    //
    this.prodService.getAllProducts().subscribe((response) => {
      this.prodList = response;
      console.log(this.prodList);
    });
  }

  // -----------------------------------------------------------------------------//

  cartProducts:any[] = [];

  addToCart(event:any) {
    if("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if(exist) {
        alert("Product is already in your cart")
      }else {
        this.cartProducts.push(event)
        localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
    }
  }
}
