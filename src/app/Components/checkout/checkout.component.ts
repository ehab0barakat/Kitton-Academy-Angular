import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { classes } from 'src/app/Models/classes';
import { AuthService } from 'src/app/Services/auth.service';
import { ClassesService } from 'src/app/Services/classes.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  id:number =0;
  cla: classes | undefined;
  constructor( private classService:ClassesService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private authService : AuthService) { }
    prod = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
    auth:any = localStorage.getItem("role");

    ngOnInit(): void {
      // this.authService.Auth().subscribe(response=>{
      //   this.auth = response ;
      //   if(this.auth.role! = 3|1 ){
      //     this.router.navigate(['/not-auth']);
      //   }else{

      this.classService.getById(this.prod).subscribe(response=>{
        this.cla = response ;
        console.log(this.cla);
      }

  )
  }

// });
// if(this.auth! = 1|3){
//   this.router.navigate(['/not-auth']);
// }
//     }

goToPayment(){
  console.log("test");
  this.router.navigate([`/payment/${this.prod}`]);

}


  }
