import { Component, OnInit } from '@angular/core';
import { DrinksService } from 'src/app/drinks.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: []
})
export class NavigationComponent implements OnInit {

  idDrink: number; 
  drinks: any;
  constructor(private _drinkService: DrinksService) { }

  ngOnInit() {
    this._drinkService.getDrink()
      .subscribe(data => this.drinks = data,
        error => console.log("error accure"));

  }

  search() {
    this.drinks = this.drinks.filter(res => {
      return res.idDrink.match(this.idDrink);
    });
  }
}
