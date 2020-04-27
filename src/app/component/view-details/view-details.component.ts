import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DrinksService } from 'src/app/drinks.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: []
})
export class ViewDetailsComponent implements OnInit {
  id: number;
  private sub: any;
  public drinks = [];
  constructor(private _drinkService: DrinksService, private _route: Router, private _activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this._drinkService.getDrink()
      .subscribe(data => this.drinks = data,
      );
    let idDrink = parseInt(this._activatedRouter.snapshot.paramMap.get('idDrink')); 
    this._drinkService.getDrinkDetail(idDrink)
    .subscribe(data =>{
      console.log("success data");
    })

  }
  
  gotolist() {
    this._route.navigate(['ourCocktails']);
  }
}
