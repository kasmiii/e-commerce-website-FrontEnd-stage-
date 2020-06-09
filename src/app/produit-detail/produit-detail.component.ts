import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Produit } from '../interfaces/produit';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.scss']
})

export class ProduitDetailComponent implements OnInit {
  id:string;
  produit:Produit;
  idUser:string;
  constructor(private router:Router,private route:ActivatedRoute,private apiService:ApiService) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    console.log("identificateur:"+this.id);
    this.apiService.getDetail(this.id).subscribe((data:Produit)=>{
    this.produit=data;
    this.idUser=localStorage.getItem('idUser');
  console.log('le id de lutilisateur correspondqnt est: '+this.idUser);
  });
  
  
}

}
