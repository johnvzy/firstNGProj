import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('HONEY DIJON GARLIC CHICKEN BREASTS', 'A simply recipe', 'https://www.rockrecipes.com/wp-content/uploads/2015/04/Honey-Dijon-Garlic-Chicken-Breasts-6-3.jpg'),
    new Recipe('HONEY DIJON GARLIC CHICKEN BREASTS', 'A simply recipe', 'https://www.rockrecipes.com/wp-content/uploads/2015/04/Honey-Dijon-Garlic-Chicken-Breasts-6-3.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
