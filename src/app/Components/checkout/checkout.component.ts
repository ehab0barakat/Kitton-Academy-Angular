import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { classes } from 'src/app/Models/classes';
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
    private activatedRoute: ActivatedRoute,) { }
    prod = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;

    ngOnInit(): void {


      this.classService.getById(this.prod).subscribe(response=>{
        this.cla = response ;
        console.log(this.cla);
    })


    }

}
