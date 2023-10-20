import { PokemonRequest } from "./pokemon-request.model";

export interface PokedexRequest{
    count : number,
    next : string,
    previous : string,
    results : PokemonRequest[]
}