import {formatDate} from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { ClassesService } from 'src/app/Services/classes.service';
import { ElementRef, ViewChild } from '@angular/core';
declare var require: any;
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css'],
})

export class CertificationComponent implements OnInit {
  @ViewChild('pdf')
  pdf!: ElementRef;
  selected= Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
  AllClasses: any;
  data: any;
  myDate: string | undefined;
 

  constructor(private authService:AuthService,private activatedRoute : ActivatedRoute,public router: Router ,
    private classService:ClassesService,
  ) {         
  }
    

  ngOnInit(): void {
   

    this.myDate=formatDate(new Date(), 'yyyy/MM/dd', 'en');


    this.authService.Auth().subscribe(response=>{
      this.data=response;
      console.log(this.data); 

    });
    this.classService.getById(this.selected).subscribe(response=>{
      this.AllClasses = response
      // console.log(this.AllClasses)
    })
    
  }
  public downloadAsPDF() {
 
  let DATA: any = document.getElementById('pdf');
  html2canvas(DATA).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    PDF.save('certification.pdf');
  });
  }
}

