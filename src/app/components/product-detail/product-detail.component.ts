import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface ICard {
  url: string;
  name: string;
  title: string;
  id: number;
  text: string;
  description?:string;
  price?:number;
  oldprice?:number;
}

@Component({
  selector: 'poli-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  dataCards: ICard[] = [
    {
      name: 'producto 1',
      url: '/assets/images/producto_1.jfif',
      id: 1,
      text: 'prod',
      title: 'producto 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 10000,
      oldprice:13000
    },
    {
      name: 'producto 2',
      url: '/assets/images/producto_2.jpg',
      id: 2,
      text: 'prod',
      title: 'producto 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 15000,
      oldprice:23000
    },
    {
      name: 'producto 3',
      url: '/assets/images/producto_3.jpg',
      id: 3,
      text: 'prod',
      title: 'producto 3',
      price: 12000,
      oldprice:20000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'producto 4',
      url: '/assets/images/producto_4.jpg',
      id: 4,
      text: 'prod',
      title: 'producto 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 5000,
      oldprice:10000
    },
  ];
  idProductView=0;
  dataInView: ICard = {
    url: '',
    name: '',
    title: '',
    id: 0,
    text: ''
  };

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((data)=>{
      this.idProductView = Number(data.get('id'));
      this.dataInView = this.dataCards[this.idProductView - 1];
      })
   }

  ngOnInit(): void {
  }

}
