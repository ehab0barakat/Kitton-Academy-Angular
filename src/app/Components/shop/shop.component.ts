import { Component, OnInit, ViewChild } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { CategoriesService } from 'src/app/Services/categories.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {

  selectedID: number = 0;
  CategoryProducts: Icategory[] = [];
  
  @ViewChild(ProductsComponent) productsRef!: ProductsComponent;  
  constructor(private CatService : CategoriesService) {}

  ngOnInit(): void {
    this.CatService.getAllCategories().subscribe((response) => {
      this.CategoryProducts = response;
      console.log(this.CategoryProducts);
    });
  }

  prodcatid(id:number){
    this.selectedID=id;
  }
}
