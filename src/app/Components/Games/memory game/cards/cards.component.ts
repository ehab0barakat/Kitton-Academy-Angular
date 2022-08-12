import { Component, OnInit } from '@angular/core';
import { MindGameService } from 'src/app/Services/mind-game.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  shuffledCards: any[] = [];
  turns: number = 0;
  choiceOne: any = null;
  choiceTwo: any = null;
  completed: boolean = false;
  cardImages = [
    { src: '../../../assets/teamimages/1.jpg' , matched: false },
    { src: '../../../assets/teamimages/2.png', matched: false },
    { src: '../../../assets/teamimages/3.jpg', matched: false },
    { src: '../../../assets/teamimages/4.jpg', matched: false },
    { src: '../../../assets/teamimages/5.jpg', matched: false },
    { src: '../../../assets/teamimages/6.png', matched: false },
  ];
  players: any;
  constructor(private MindsGameService : MindGameService) { }

  ngOnInit(): void {
    this.completed = false;
    this.shuffleCards();



    this.MindsGameService.AllScores().subscribe((response) => {
      this.players = response
    });






  }

  ngDoCheck() {
    if (this.choiceOne && this.choiceTwo) {
      if (this.choiceOne.src === this.choiceTwo.src) {
        this.shuffledCards = this.shuffledCards.map((card) => {
          if (card.src === this.choiceOne.src) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        });
        console.log('MATCHED');
        this.resetTurn();
      } else {
        console.log('NO MATCH');
        setTimeout(() => {
          this.resetTurn();
        }, 500);
      }
    }

    if (this.shuffledCards.every((card) => card.matched === true)) {
      this.completed = true;

    setTimeout(() => {

      this.MindsGameService.CreateNewScore({"score": this.turns}).subscribe((response) => {
          this.MindsGameService.AllScores().subscribe((response) => {
            this.players = response
          });
      });

      this.shuffleCards();
      this.completed = false;
    }, 4000);

    }
  }

  resetTurn() {
    this.choiceOne = null;
    this.choiceTwo = null;
    this.turns += 1;
  }

  shuffleCards() {
    const newCardsArray = [...this.cardImages, ...this.cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    this.shuffledCards = newCardsArray;
    this.turns = 0;
  }
  handleClickCard(card: any) {
    console.log(card);
    this.choiceOne != null ? (this.choiceTwo = card) : (this.choiceOne = card);
  }

}
