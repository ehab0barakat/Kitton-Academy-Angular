
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Games } from "../../../Models/games"
import { GamesService } from 'src/app/Services/games.service';


@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.css']
})

export class SingleGameComponent implements OnInit {

  constructor( private router:Router,
    private GamesService:GamesService,
    private activatedRoute : ActivatedRoute) { }


  SingleGame : Games = {
    id: 0,
    title: '',
    description: '',
    img: '',
    gameCat_id: 0
  }


  prod = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;


  ngOnInit(): void {


    this.GamesService.getgamecatsByID(this.prod).subscribe(response=>{
      this.SingleGame = response ;
  })

  }
}
