import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { ClassContentService } from 'src/app/Services/class-content.service';
import { ClassesService } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-delete-class',
  templateUrl: './delete-class.component.html',
  styleUrls: ['./delete-class.component.css']
})
export class DeleteClassComponent implements OnInit {
  valid: any;

  constructor( private activatedRoute : ActivatedRoute,
    private classService:ClassesService,
    private router:Router,
    private authService : AuthService,
    private ClassContent: ClassContentService) { }




    auth:any = localStorage.getItem("role");
    targetId = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
  ngOnInit(): void {

    this.ClassContent.ValidationForClass(this.targetId).subscribe(response=>{
      this.valid = response
      if(!this.valid.valid){
        this.router.navigate(['/not-auth']);
      }else{
        this.classService.delete(this.targetId).subscribe(response =>{
          if(response){
            this.router.navigate(['/admin/classes-index']);
          }
    });
    this.authService.Auth().subscribe(response=>{
      this.auth = response ;
      if(this.auth.role != 3 ){
        this.router.navigate(['/not-auth']);
      }
    }
  )
  }

});
if(this.auth != 3){
  this.router.navigate(['/not-auth']);
}
}
}
