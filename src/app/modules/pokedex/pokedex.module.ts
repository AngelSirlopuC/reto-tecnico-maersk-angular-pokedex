import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokedexListComponent } from './pages/pokedex-list/pokedex-list.component';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokedexListComponent,
    PokemonDetailComponent,
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    NgbPaginationModule,
    SharedModule,
    FormsModule
  ]
})
export class PokedexModule { }
