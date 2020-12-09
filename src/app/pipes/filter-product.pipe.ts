import { Pipe, PipeTransform } from '@angular/core';

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

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: ICard[], productView:number): ICard[] {
    console.log(value, productView)
    if (!value) {
      return []
    }

    const newArray = value.filter(elem => elem.id !== productView)

    return newArray
  }

}
