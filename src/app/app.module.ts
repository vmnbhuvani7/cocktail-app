import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { DrinksService } from './drinks.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewDetailsComponent } from './component/view-details/view-details.component'
import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutUsComponent,
    routingComponents,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DrinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
