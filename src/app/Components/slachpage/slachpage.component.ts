import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slachpage',
  templateUrl: './slachpage.component.html',
  styleUrls: ['./slachpage.component.css']
})
export class SlachpageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['/home']);
  }




}
