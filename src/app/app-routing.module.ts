import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaytripstoursComponent } from './daytripstours/daytripstours.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RentboatComponent } from './rentboat/rentboat.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{ path:'accomodation', component: AccomodationComponent },
{ path:'daytripstours', component: DaytripstoursComponent },
{ path:'food-and-beverage', component: FoodAndBeverageComponent },
{ path: 'foodandbeverage',
    redirectTo: 'food-and-beverage',
    pathMatch: 'full' },
{ path:'rentboat', component: RentboatComponent },
{ path:'offers', component: OffersComponent },
{ path: 'signin', component: SigninComponent },
{ path: 'signup', component: SignupComponent },
{ path: '', component: HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
