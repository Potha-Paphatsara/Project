import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(items: any[], cat_id: number): any {
      if (!items || !cat_id) {
          return items;
      }
      // filter items array, items which match and return true will be
      // kept, false will be filtered out
      //console.log('fitler ',cat_id);
      return items.filter(item => item.rec_cat_ids.indexOf(cat_id) !== -1);
  }


}
