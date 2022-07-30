import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { classCats } from 'src/app/Models/classcats';
import { classes } from 'src/app/Models/classes';
import { AuthService } from 'src/app/Services/auth.service';
import { ClassCatsService } from 'src/app/Services/class-cats.service';
import { ClassesService } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.css']
})
export class UpdateClassComponent implements OnInit {

  constructor( private activatedRoute : ActivatedRoute,
    private classService:ClassesService,
    private router:Router,
    private classcatsService:ClassCatsService,
    private authService:AuthService) { }
    editClass :classes ={} as classes ;

    AllClassCats:classCats[] = []
    currentPrdID= Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
    auth:any = localStorage.getItem("role");

  ngOnInit(): void {
    this.authService.Auth().subscribe(response=>{
      this.auth = response ;
      if(this.auth.role != 2 ){
        this.router.navigate(['/not-auth']);
      }
    });

    if(this.auth != 3){
      this.router.navigate(['/not-auth']);
    }
    this.classcatsService.getAllClassCats().subscribe(response=>{
      this.AllClassCats=response ;
    })

    this.classService.getById(this.currentPrdID).subscribe(response=>{
      this.editClass = response ;
      console.log(response);
    });
}
update(){
  this.authService.Auth().subscribe(response=>{
    this.auth = response ;
    if(this.auth.role != 3 ){
      this.router.navigate(['/not-auth']);
    }else{
  // console.log(this.editClass);
  // console.log(this.currentPrdID);
   this.classService.update(this.editClass, this.currentPrdID).subscribe(response =>{
    console.log(response);

  if(response){
    this.router.navigate(['/classes-index']);
  }
}
)
}
});
}}
