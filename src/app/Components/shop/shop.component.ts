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

  prodListOfCat:IProduct[]=[];

  constructor(private prodService:ProductsService) { }

  ngOnInit(): void {
    this.prodService.getAllProducts().subscribe(response=>{
      this.prodListOfCat=response;
      console.log(this.prodListOfCat);
    });

  }

}
