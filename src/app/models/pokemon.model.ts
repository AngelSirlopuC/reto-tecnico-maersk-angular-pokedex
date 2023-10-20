export class Pokemon{
    name : string
    image : string
    hp : number
    attack: number
    defense : number
    'special-attack' : number
    'special-defense' : number
    speed : number
    constructor() {
        this.name = "";
        this.image = "";
        this.hp = -1;
        this.attack = -1;
        this.defense  = -1;
        this["special-attack"]  = -1;
        this["special-defense"]  = -1;
        this.speed  = -1;
    }
}