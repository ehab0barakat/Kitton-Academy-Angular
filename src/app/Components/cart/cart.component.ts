import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id: number = 0;
  product: IProduct | undefined;
  prdIDList: number[] = [];
  currentPrdID: number = 0;
  currentIndex: number = 0;
  prodListOfCat: IProduct[] = [];
  constructor(
    private router: Router,
    private prodService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
