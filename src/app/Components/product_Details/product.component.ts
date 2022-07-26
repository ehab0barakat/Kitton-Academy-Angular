import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  id: number = 0;
  product: IProduct | undefined;
  prdIDList: number[] = [];
  currentPrdID: number = 0;
  currentIndex: number = 0;
  prodListOfCat: IProduct[] = [];
  constructor(
    private router: Router,
    private prodService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  prd = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  ngOnInit(): void {
    this.prodService.getProductByID(this.prd).subscribe((response) => {
      this.product = response;
      console.log(this.product);
    });

    // this.prodService.getAllProducts().subscribe((response) => {
    //   this.prodListOfCat = response;
    //   console.log(this.prodListOfCat);
    // });

    // this.activatedRoute.paramMap.subscribe(paramMap =>{
    //   this.currentPrdID=(paramMap.get('pid'))?Number(paramMap.get('pid')):0;
    //   let foundedPrd= this.prodService.getProductByID(this.currentPrdID);
    //   if(foundedPrd){
    //     this.prod=foundedPrd;
    //     console.log(this.prod);
    //   }
    //   else{
    //     alert("Product not found");
    //     this.location.back();
    //   }
    // });
  }
  goBack() {
    this.location.back();
  }
  // searchProduct(prdName:string){
  //  let foundedPrd= this.prodService.searchProductByName(prdName);
  //  if(foundedPrd)
  //  {
  //   this.prd=foundedPrd;
  //  }
  //  else{
  //   alert("Product not found");
  //  }
  // }
  goPrevious() {
    this.currentIndex = this.prdIDList.findIndex(
      (item) => item == this.currentPrdID
    );
    this.router.navigate(['/Products', this.prdIDList[--this.currentIndex]]);
  }
  goNext() {
    this.currentIndex = this.prdIDList.findIndex(
      (item) => item == this.currentPrdID
    );
    this.router.navigate(['/Products', this.prdIDList[++this.currentIndex]]);
  }
}
