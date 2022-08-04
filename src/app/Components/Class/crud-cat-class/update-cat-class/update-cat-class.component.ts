import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassCatsService } from 'src/app/Services/class-cats.service';

@Component({
  selector: 'app-update-cat-class',
  templateUrl: './update-cat-class.component.html',
  styleUrls: ['./update-cat-class.component.css']
})
export class UpdateCatClassComponent implements OnInit {

  constructor( private activatedRoute : ActivatedRoute,
    private router:Router,
    private classcatsService:ClassCatsService) { }

    editCatClass :any = {}  ;
    currentPrdID= Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
  ngOnInit(): void {

    this.classcatsService.getClassCatID(this.currentPrdID).subscribe(response=>{
      this.editCatClass = response ;
      console.log(this.editCatClass);
      console.log(response);
    });
}
update(){
  console.log(this.editCatClass);
  console.log(this.currentPrdID);

   this.classcatsService.update(this.editCatClass, this.currentPrdID).subscribe(response =>{
    console.log(response);

  if(response){
    this.router.navigate(['/admin/classescat-index']);
  }
}
)
  }

}
