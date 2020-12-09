import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poli-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  dataGAllery = [
    {
      name:'img_1',
      url:'/assets/images/servicio_1.jpeg'
    },
    {
      name:'img_2',
      url:'/assets/images/servicio_2.jpg'
    },
    {
      name:'img_3',
      url:'/assets/images/servicio_3.jfif'
    },
    {
      name:'img_4',
      url:'/assets/images/servicio_4.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
