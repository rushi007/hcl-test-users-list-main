import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if(!items) {
      return [];
    }
    if(!field || !value) {
      return items;
    }

    return items.filter(eachItem => eachItem[field].toLowerCase().includes(value.toLowerCase()));

  }

}
