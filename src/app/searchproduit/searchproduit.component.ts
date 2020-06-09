import { Component, OnInit } from '@angular/core';
import { Produit } from '../interfaces/produit';
import { ApiService } from '../services/api.service';
import { Globals } from '../classes/globals';

@Component({
  selector: 'app-searchproduit',
  templateUrl: './searchproduit.component.html',
  styleUrls: ['./searchproduit.component.scss']
})
export class SearchproduitComponent implements OnInit {

  produits:Produit[];
  constructor(private apiService:ApiService,public globals:Globals) { }

  ngOnInit() {
    this.apiService.getProductsByChoice(this.globals.produit_recherche).subscribe((data:Produit[])=>{
      this.produits=data;
      console.log("les produits trouves:"+this.produits);
  });
}

}
