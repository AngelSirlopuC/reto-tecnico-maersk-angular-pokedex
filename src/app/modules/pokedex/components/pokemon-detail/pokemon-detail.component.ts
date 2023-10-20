import { Component, OnInit, Input, SimpleChanges,Output,EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemonId : number = -1;

  pokemon : Pokemon = new Pokemon();

  @Output() closeEvent = new EventEmitter();
  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes : SimpleChanges){
    if(changes.pokemonId == null){
      return;
    }
    this.detail(changes.pokemonId.currentValue);
  }

  async detail(id : number){
    const pokemon  = await this.pokemonService.getPokemon(id).toPromise();
    pokemon.forEach((element : never) => {
      if(element[0] as keyof Pokemon)
        this.pokemon[element[0] as keyof Pokemon] = element[1];
    });
  }
  close(){
    this.closeEvent.emit(true);
  }
}
