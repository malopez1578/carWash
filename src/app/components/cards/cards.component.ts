import { Component, Input, OnInit } from '@angular/core';

interface ICard {
  url:string;
  name:string;
  title:string;
  id: number;
  text:string;
}

@Component({
  selector: 'poli-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() Card: ICard = {url:'', name:'', title:'', id:1,text:''}

  constructor() { }

  ngOnInit(): void {
  }

}
