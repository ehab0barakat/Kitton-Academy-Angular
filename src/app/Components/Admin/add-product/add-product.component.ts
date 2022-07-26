import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { CategoriesService } from 'src/app/Services/categories.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  catList: Icategory[] = [];
  newPrd: IProduct = {} as IProduct;

  constructor(
    private prodService: ProductsService,
    private CatService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.CatService.getAllCategories().subscribe((response) => {
      this.catList = response;
      console.log(this.catList);
    });
  }

  InsertProduct() {
    this.prodService.addProduct(this.newPrd).subscribe({
      next: (prd) => {
        this.router.navigate(['/Products']);
      },
      error: (err) => {
        alert('Error occured');
      },
    });
  }
}
