import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { NormaluserApiService } from 'src/app/Services/normaluser-api.service';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.css']
})
export class DeleteProfileComponent implements OnInit {
  data: any;
  // auth:any = localStorage.getItem("role");

  constructor(private authService:AuthService,private normalUserApi:NormaluserApiService,
    private router:Router) { }

  ngOnInit(): void {
        // / get data of  login user
this.authService.Auth().subscribe(response=>{
  this.data=response;
  console.log(this.data);
})

  }

  deleteProfile(dataPass:any,inputPass:any){

    if(dataPass == inputPass && this.data.role==1){
    this.normalUserApi.deleteProfile(this.data.id).subscribe(res=>{
  
     
      alert("account deleted")
    
    this.router.navigate(['/sign-out']);
     
    })

    }
    else{

      alert("password you have entered wrong")
    }

  }

}
