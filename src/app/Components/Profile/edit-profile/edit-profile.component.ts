import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
data:any;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {

    // / get data of  login user
this.authService.Auth().subscribe(response=>{
  this.data=response;
  console.log(this.data);
})


  }

  update(){
    
  }

}
