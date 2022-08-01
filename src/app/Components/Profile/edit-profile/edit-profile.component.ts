import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { NormaluserApiService } from 'src/app/Services/normaluser-api.service';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
data:any;
  constructor(private authService:AuthService,private normalUserApi:NormaluserApiService,
    private router:Router, private teacherService:TeacherService) { }

  ngOnInit(): void {

    // / get data of  login user
this.authService.Auth().subscribe(response=>{
  this.data=response;
  console.log(this.data.role);
})


  }



  update(){

    
     
    this.normalUserApi.editProfile(this.data,this.data.id).subscribe(res=>{
      
       if(Response){
   
        this.router.navigate(['/profile'])

     }
       
    }
       
      )


  }


  // teacher  update
  teacherUpdate(){
    this.teacherService.editProfile(this.data,this.data.id).subscribe(res=>{

      if(res){
   
        this.router.navigate(['/profile'])

     }

    })


  }

}
