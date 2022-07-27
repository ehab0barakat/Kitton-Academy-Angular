import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Games } from "../../../Models/games"
import { GamesService } from 'src/app/Services/games.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit  {

  constructor( private router:Router,
    private GamesService:GamesService) {

    }

    AllGames:Games[] = [];

    ngOnInit(): void {

    this.GamesService.getAllgames().subscribe(response=>{
      this.AllGames=response ;
      console.log(this.AllGames)
      console.log(response)
    })
  }



}
