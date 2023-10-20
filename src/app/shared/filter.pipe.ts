import { Pipe, PipeTransform } from '@angular/core';
import { PokemonRequest } from '../models/pokemon-request.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: PokemonRequest[] | null, searchText: string): PokemonRequest[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      if (item && item.name) {
        return item.name.toLowerCase().includes(searchText);
      }
      return false;
    });
   }
}