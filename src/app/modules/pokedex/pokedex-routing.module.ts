import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexListComponent } from './pages/pokedex-list/pokedex-list.component';


const routes: Routes = [
  { path: '', component: PokedexListComponent },
//   { path: 'detail', component:  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }