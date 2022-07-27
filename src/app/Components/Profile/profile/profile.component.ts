import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Profile } from 'src/app/Models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileFormGroup: FormGroup ;
  profileDetails:Profile[]=[];
  constructor(private fb: FormBuilder) { 
    
    this.profileFormGroup=this.fb.group({
      fname:[''],
      lName:[''],
      email:[''],

    
  })
}
  

  ngOnInit(): void {

  }

}
