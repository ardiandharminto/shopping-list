import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.tasteofhome.com/wp-content/uploads/2022/10/Sicilian-Pizza-Sfincione-_EXPS_RC22_267982_P2_MD_05_05_3b-1.jpg?resize=522%2C522&w=680'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.tasteofhome.com/wp-content/uploads/2022/10/Sicilian-Pizza-Sfincione-_EXPS_RC22_267982_P2_MD_05_05_3b-1.jpg?resize=522%2C522&w=680'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
