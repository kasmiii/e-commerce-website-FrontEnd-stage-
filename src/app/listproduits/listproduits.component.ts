import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Search } from '../interfaces/search';
import { ApiService } from '../services/api.service';
import { Produit } from '../interfaces/produit';
import { Router, Route } from '@angular/router';
import { Globals } from '../classes/globals';
@Component({
  selector: 'app-listproduits',
  templateUrl: './listproduits.component.html',
  styleUrls: ['./listproduits.component.scss']
})
export class ListproduitsComponent implements OnInit {
categories:string[]=['modeHomme','telephone','ordinateur','sport','modeFemme','electronique'];
marques:string[]=['ADIDAS','NIKE','rolex','acer','lenovo'];
produits:Produit[];
choice:Search={
  produit:""
};

  constructor(private apiService:ApiService,private router:Router,public globals:Globals) { }

  ngOnInit() {
     this.apiService.getAllProducts().subscribe((data:Produit[])=>{
      this.produits=data; 
    });
  }

  onSearch(form){
    this.choice.produit=form.produit_recherche;
    console.log("la valeur de globals est :   "+this.choice.produit);
    this.globals.produit_recherche=this.choice;
    console.log("thisgloblssksksks:"+this.globals.produit_recherche.produit);
    this.apiService.getProductsByChoice(this.globals.produit_recherche);
    this.router.navigate(['/listproduits/chercherparnom']);
  }

}