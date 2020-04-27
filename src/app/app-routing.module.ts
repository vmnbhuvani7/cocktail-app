import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { OurCocktailsComponent } from './component/our-cocktails/our-cocktails.component';
import { ViewDetailsComponent } from './component/view-details/view-details.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'aboutUs', component:AboutUsComponent},
  {path:'ourCocktails', component:OurCocktailsComponent},
  {path:'ourCocktails/:idDrink', component:ViewDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutUsComponent, OurCocktailsComponent, ViewDetailsComponent ]
