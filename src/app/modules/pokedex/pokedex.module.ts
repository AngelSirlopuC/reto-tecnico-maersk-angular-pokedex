import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokedexListComponent } from './pages/pokedex-list/pokedex-list.component';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokedexListComponent,
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    NgbPaginationModule
  ]
})
export class PokedexModule { }
