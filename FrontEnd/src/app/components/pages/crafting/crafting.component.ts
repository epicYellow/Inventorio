import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { RecipesService } from 'src/app/services/recipes.service';
import { Recipes } from 'src/app/shared/models/Recipes';

@Component({
  selector: 'app-crafting',
  templateUrl: './crafting.component.html',
  styleUrls: ['./crafting.component.scss'],
})
export class CraftingComponent {
  Recipes!: Recipes[];

  constructor(
    private recipeService: RecipesService,
    activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    let RecipeObservable: Observable<Recipes[]>;

    activatedRoute.params.subscribe((params) => {
      RecipeObservable = recipeService.getAll();
    });

    RecipeObservable.subscribe((serverLocations) => {
      this.Recipes = serverLocations;
    });
  }

  counter(i: number) {
    return new Array(i);
  }
}
