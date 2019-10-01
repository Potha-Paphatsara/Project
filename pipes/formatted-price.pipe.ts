import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattedPrice'
})
export class FormattedPricePipe implements PipeTransform {

  transform(value: string, ...args) {
    var newone = parseFloat(value).toFixed(2);
    return '$'+this.getFomatedPrice(newone);
  }

  getFomatedPrice(n){
     //n = n.toFixed(2);
     return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
