import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PokemonRoutingModule
  ],
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent
  ]
})
export class PokemonModule { }
