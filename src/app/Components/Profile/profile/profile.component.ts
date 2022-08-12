import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   data:any;
  constructor(private fb: FormBuilder,private authService:AuthService) { 
    
    
}
  

  ngOnInit(): void {
    // / get data of  login user
this.authService.Auth().subscribe(response=>{
  this.data=response;
  // console.log(this.data);
})


  }

}
