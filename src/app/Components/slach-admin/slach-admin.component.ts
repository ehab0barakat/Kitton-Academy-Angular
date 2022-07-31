import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slach-admin',
  templateUrl: './slach-admin.component.html',
  styleUrls: ['./slach-admin.component.css']
})
export class SlachAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/admin']);
  }

}
