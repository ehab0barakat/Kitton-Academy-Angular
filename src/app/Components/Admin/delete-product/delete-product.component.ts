import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  targetId = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;

  constructor(
    private router: Router,
    private prodService: ProductsService,
    private CatService: CategoriesService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.prodService.deleteProd(this.targetId).subscribe(response =>{
      if(response){
        this.router.navigate(['/ProductList']);
      }
    }
  )
  }

}
