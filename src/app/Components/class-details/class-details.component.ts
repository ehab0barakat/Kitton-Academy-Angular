import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common';
import { classes } from 'src/app/Models/classes';
import { ClassesService } from 'src/app/Services/classes.service';
@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {

  id:number =0;
  cla: classes | undefined;
  // cla!: classes[];
  constructor( private router:Router,
    private classService:ClassesService,
    private activatedRoute: ActivatedRoute,
    private location:Location) { }



prod = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;

ngOnChange(prod: any): void{
  // this.classService.deleteClass(this.prod).subscribe(
  //   response=>{
  //     this.cla = response;
  //   });
}

  ngOnInit(): void {


    this.classService.getById(this.prod).subscribe(response=>{
      this.cla = response ;
      console.log(this.cla);
  })


  }
//   deleteClass(id: number) {
//     const cla = this.prod.find(x => x.id === id);
//     if (!cla) return;
//     cla.isDeleting = true;
//     this.classService.deleteClass(id)
//         .pipe(first())
//         .subscribe(() => this.users = this.users.filter(x => x.id !== id));
// }


}




