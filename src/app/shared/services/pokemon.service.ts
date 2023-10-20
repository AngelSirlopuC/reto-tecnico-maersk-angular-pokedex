import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { PokedexRequest } from '../../models/pokedex-request.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  base_url : string = environment.endpoint;
  limit : number = 151;
  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get<PokedexRequest>(`${this.base_url}/pokemon?limit=${this.limit}`).pipe(
      map((data : PokedexRequest) => data.results.sort((a, b) => a.name.localeCompare(b.name)))
    );
  }

  getPokemon(id : number){
    return this.http.get(`${this.base_url}/pokemon/${id}`);
  }
}
