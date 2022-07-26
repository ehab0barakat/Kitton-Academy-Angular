import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'; // import router from angular router


@Component({
  selector: 'app-signup-asteacher',
  templateUrl: './signup-asteacher.component.html',
  styleUrls: ['./signup-asteacher.component.css']
})
export class SignupAsteacherComponent implements OnInit {
  pass:any
  conpass:any
  max:any
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onKeypassword(event:any){
    this.conpass = event.target.value
  }
  onKeymax(event:any){
    this.max = event.target.value
  }

  onKey(event: any) {
    this.pass = event.target.value
  }

  mysubmit(myform:NgForm){
    console.log(myform.value)
    this.route.navigate(['/teachers'])
  }

}
