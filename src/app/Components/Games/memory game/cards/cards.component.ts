import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
    this.completed = false;
    this.shuffleCards();
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
        console.log(this.turns);
      } else {
        console.log('NO MATCH');
        setTimeout(() => {
          this.resetTurn();
        }, 500);
        console.log(this.turns);
      }
    }
    if (this.shuffledCards.every((card) => card.matched === true)) {
      this.completed = true;

      setTimeout(() => {
        this.shuffleCards();
        this.completed = false;
      }, 4000);
    }
    console.log(this.shuffledCards);
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

    console.log(this.shuffledCards, this.turns);
  }
  handleClickCard(card: any) {
    console.log(card);
    this.choiceOne != null ? (this.choiceTwo = card) : (this.choiceOne = card);
    console.log('choiceOne: ', this.choiceOne);
    console.log('choiceTwo: ', this.choiceTwo);
  }

}
