import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import {Router} from '@angular/router'; // import router from angular router

import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  pass:any
  conpass:any
  age:any
  constructor( private route:Router) { }

  ngOnInit(): void {
  }
  mysubmit(myform:NgForm){
    console.log(myform.value)
    this.route.navigate(['/teachers'])
  }

  onKeypassword(event:any){
    this.conpass = event.target.value
  }

  onKey(event: any) {
    this.pass = event.target.value
  }
  
  onKeyage(event: any) {
    this.age = event.target.value
    console.log(this.age)

  }
  
}
