import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { Icategory } from 'src/app/Models/icategory';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  catList: Icategory[] = [];
  editProd: IProduct = {} as IProduct;
  targetId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  constructor(
    private router: Router,
    private prodService: ProductsService,
    private CatService: CategoriesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.CatService.getAllCategories().subscribe((response) => {
      this.catList = response;
    });

    this.prodService.getProductByID(this.targetId).subscribe((response) => {
      this.editProd = response;
      console.log(response);
      console.log(this.editProd);
    });
  }

  EditProduct() {
    this.prodService.editProd(this.editProd, this.targetId).subscribe((response) => {
        if (response) {
          this.router.navigate(['/ProductList']);
        }
      });
  }
}
