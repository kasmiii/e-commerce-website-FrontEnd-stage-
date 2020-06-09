import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Command } from '../interfaces/command';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  commands:Command[];
  idUser:string;
  nbre_commandes:number;
  total:number;
  totalPromotion:number;

  constructor(private apiService:ApiService,private route:ActivatedRoute,private router:Router) { }
  
  ngOnInit() {
  this.idUser=this.route.snapshot.paramMap.get('idUser');
  this.apiService.getProductsByIdUser(this.idUser).subscribe((data:Command[])=>{    
  this.commands=data;  
  this.nbre_commandes=this.commands.length;
  this.total=0;
  this.totalPromotion=0;
  let i;
  for(i=0;i<this.commands.length;i++){
    this.total+=this.commands[i].prix;
    this.totalPromotion+=this.commands[i].promotion;
  }
  console.log(this.nbre_commandes);
  
  localStorage.setItem('nbre_commandes',this.nbre_commandes.toString()); 
  });
  }

}
