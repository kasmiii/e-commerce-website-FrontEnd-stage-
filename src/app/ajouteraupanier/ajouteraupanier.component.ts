import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ajouteraupanier',
  templateUrl: './ajouteraupanier.component.html',
  styleUrls: ['./ajouteraupanier.component.scss']
})

export class AjouteraupanierComponent implements OnInit {

  idProduit:string="hello";
  idUser:string="httt";

  constructor(private router:Router,private route:ActivatedRoute,private apiService:ApiService) { }

  ngOnInit() {
    this.idUser=this.route.snapshot.paramMap.get('idUser');
    this.idProduit=this.route.snapshot.paramMap.get('idProduit');
    console.log("le id du produit recupere a prtir du requte est: "+this.idProduit);
    console.log("le id du user recupere a prtir du requte est: "+this.idUser);
    this.apiService.save_command(this.idUser,this.idProduit).subscribe((data)=>{
      console.log("la commande a ete enregistree avec succes");
    });
    this.router.navigate(['/listproduits']);
  }
}