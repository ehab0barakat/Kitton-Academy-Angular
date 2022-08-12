import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
  @Input() card: any = [];
  @Input() flipped = false;
  @Output() clickCard = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(card: any) {
    this.clickCard.emit(card);
  }
}
