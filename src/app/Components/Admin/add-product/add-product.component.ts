import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { Icategory } from 'src/app/Models/icategory';
import { ProductsService } from 'src/app/Services/products.service';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  catList: Icategory[] = [];
  NewProd: IProduct = {} as IProduct;

  constructor(
    private router: Router,
    private prodService: ProductsService,
    private CatService: CategoriesService,
    private activatedRoute : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.CatService.getAllCategories().subscribe((response) => {
      this.catList = response;
      console.log(this.catList);
    });
  }

  InsertProduct() {
    this.prodService.addProduct(this.NewProd).subscribe({
      next: (prd) => {
        this.router.navigate(['/ProductList']);
      },
      error: (err) => {
        alert('Error occured');
      },
    });
  }
}

