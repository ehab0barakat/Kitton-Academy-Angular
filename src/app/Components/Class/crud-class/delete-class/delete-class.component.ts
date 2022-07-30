import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { ClassesService } from 'src/app/Services/classes.service';

@Component({
  selector: 'app-delete-class',
  templateUrl: './delete-class.component.html',
  styleUrls: ['./delete-class.component.css']
})
export class DeleteClassComponent implements OnInit {

  constructor( private activatedRoute : ActivatedRoute,
    private classService:ClassesService,
    private router:Router,
    private authService : AuthService) { }
    auth:any = localStorage.getItem("role");
    targetId = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
  ngOnInit(): void {
    this.authService.Auth().subscribe(response=>{
      this.auth = response ;
      if(this.auth.role != 3 ){
        this.router.navigate(['/not-auth']);
      }else{
    this.classService.delete(this.targetId).subscribe(response =>{
      if(response){
        this.router.navigate(['/classes-index']);
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
