import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  base_url : string = environment.endpoint;
  limit : number = 151;
  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get(`${this.base_url}/pokemon?limit=${this.limit}`);
  }

  getPokemon(id : number){
    return this.http.get(`${this.base_url}/pokemon/${id}`);
  }
}
