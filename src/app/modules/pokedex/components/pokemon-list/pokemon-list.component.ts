import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonRequest } from 'src/app/models/pokemon-request.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  page : number = 1;
  pageSize : number = 10;
  pokemons$: Observable<PokemonRequest[]> = new Observable<PokemonRequest[]>();
  searchText : string = "";

  @Output() goPokemonFn = new EventEmitter();
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemons$ = this.pokemonService.getPokemons();
  }

  goPokemon(url : string){
    const id = url.match(/\/(\d+)\/$/);
    if(id == null){
      return;
    }
    this.goPokemonFn.emit(id[1]);
  }
}
