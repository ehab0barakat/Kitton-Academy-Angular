import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'; // import router from angular router


@Component({
  selector: 'app-signin-asadmin',
  templateUrl: './signin-asadmin.component.html',
  styleUrls: ['./signin-asadmin.component.css']
})
export class SigninAsadminComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  mysubmit(myform:NgForm){
    console.log(myform.value)
    this.route.navigate(['/teachers'])
  }

}
