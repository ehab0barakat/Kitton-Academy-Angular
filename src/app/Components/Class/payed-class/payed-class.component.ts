import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassesService } from 'src/app/Services/classes.service';
import { MyclassesService } from 'src/app/Services/myclasses.service';
@Component({
  selector: 'app-payed-class',
  templateUrl: './payed-class.component.html',
  styleUrls: ['./payed-class.component.css']
})
export class PayedClassComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute,public router: Router ,
    private classService:ClassesService,
    private MyclassesService:MyclassesService) { }


    selected= Number(this.activatedRoute.snapshot.paramMap.get("id")) ;

    AllClasses:any ;

    ngOnInit(): void {


        this.classService.getById(this.selected).subscribe(response=>{
          this.AllClasses = response
          console.log(this.AllClasses)
        })

      }
      currentRate:number=3;
     
      onRateChange(event: number){
        this.MyclassesService.rateChange({'class_id':`${this.selected}`,'rate':`${event}`}).subscribe(response=>{
          // this.AllmyClasses =response;
          // console.log(this.selected);
          // console.log(`${event}`);
          // console.log(response);

        })
        // alert(`rate is ${event}`);
      }
    }

