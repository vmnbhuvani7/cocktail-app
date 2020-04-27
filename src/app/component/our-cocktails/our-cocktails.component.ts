import { Component, OnInit } from '@angular/core';
import { DrinksService } from 'src/app/drinks.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-our-cocktails',
  templateUrl: './our-cocktails.component.html',
  styleUrls: []
})
export class OurCocktailsComponent implements OnInit {
  idDrink: number;
  public drinks = [];
  strDrink: any;
  constructor(private _drinkService: DrinksService, private _route: Router, private _activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this._drinkService.getDrink()
      .subscribe(data => this.drinks = data,
        error => console.log("error accure"));
  }

  gotoEdit(idDrink: number) {
    this._route.navigate(['/ourCocktails', idDrink]);
  }

  search() {
    if (this.strDrink != "") {
      this.drinks = this.drinks.filter(res => {
        return res.strDrink.toLocaleLowerCase().match(this.strDrink.toLocaleLowerCase());
      });
    } else if (this.strDrink == "") {
      this.ngOnInit();
    }
  }
}