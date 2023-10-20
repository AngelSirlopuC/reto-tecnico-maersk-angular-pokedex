import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})
export class PokedexListComponent implements OnInit {

  PokemonId : number | null = null;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  redirectTo(id : number){
    this.PokemonId = id;
  }

  close(event : any){
    this.PokemonId = null;
  }
}
