import { Component, OnInit } from '@angular/core';

interface ICard {
  url: string;
  name: string;
  title: string;
  id: number;
  text: string;
}

@Component({
  selector: 'poli-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  dataCards: ICard[] = [
    {
      name: 'producto 1',
      url: '/assets/images/producto_1.jfif',
      id: 1,
      text: 'prod',
      title: 'producto 1',
    },
    {
      name: 'producto 2',
      url: '/assets/images/producto_2.jpg',
      id: 2,
      text: 'prod',
      title: 'producto 2',
    },
    {
      name: 'producto 3',
      url: '/assets/images/producto_3.jpg',
      id: 3,
      text: 'prod',
      title: 'producto 3',
    },
    {
      name: 'producto 4',
      url: '/assets/images/producto_4.jpg',
      id: 4,
      text: 'prod',
      title: 'producto 4',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
