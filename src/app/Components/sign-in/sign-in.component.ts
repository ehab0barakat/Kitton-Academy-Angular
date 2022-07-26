import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'; // import router from angular router


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  mysubmit(myform:NgForm){
    console.log(myform.value)
    this.route.navigate(['/teachers'])
  }

}
