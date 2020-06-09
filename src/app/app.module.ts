import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import { SearchComponent } from './search/search.component';
import { ListproduitsComponent } from './listproduits/listproduits.component';
import { SearchproduitComponent } from './searchproduit/searchproduit.component';
import { ApiService } from './services/api.service';
import { Globals } from './classes/globals';
import { ErrorComponent } from './error/error.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { AuthGuard } from './auth/auth.guard';
import { AjouteraupanierComponent } from './ajouteraupanier/ajouteraupanier.component';
import { CartComponent } from './cart/cart.component';
import { LogoutComponent } from './logout/logout.component';
import { PayementComponent } from './payement/payement.component';

const appRoutes:Routes=[
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'listproduits',component:ListproduitsComponent},
  {path:'listproduits/chercherparnom',component:SearchproduitComponent},
  {path:'listproduits/chercherparnom/:id',component:SearchDetailComponent},//!!!!a changer (le component)
  {path:'listproduits/:id',component:ProduitDetailComponent},
  {path:'ajouteraupanier/:idUser/:idProduit',component:AjouteraupanierComponent,canActivate:[AuthGuard]},
  {path:'card/:idUser',component:CartComponent,canActivate:[AuthGuard] },
  {path:'payement/:idUser',component:PayementComponent,canActivate:[AuthGuard]},
  {path:'logout',component:LogoutComponent},
  {path:'',component:ListproduitsComponent}
  //{path:'**',component:ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ListproduitsComponent,
    SigninComponent,
    SearchComponent,
    ProduitDetailComponent,
    SearchproduitComponent,
    SearchDetailComponent,
    ErrorComponent,
    AjouteraupanierComponent,
    CartComponent,
    LogoutComponent,
    PayementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService,Globals,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }