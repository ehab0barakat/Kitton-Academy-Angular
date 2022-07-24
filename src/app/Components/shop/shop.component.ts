import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  [x: string]: any;

  prodListOfCat:IProduct[]=[];
  prod:IProduct | undefined=undefined;


  constructor(private prodService:ProductsService,
               private router:Router,) { }

  ngOnInit(): void {
    this.prodService.getAllProducts().subscribe(response=>{
      this.prodListOfCat=response;
      console.log(this.prodListOfCat);
    });

  }

  openProductDetails(prodID:number){
    this.router.navigate(['Products',prodID]);

  }
}
