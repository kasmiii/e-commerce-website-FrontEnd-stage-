import { Component, OnInit } from '@angular/core';
import { Produit } from '../interfaces/produit';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss']
})
export class SearchDetailComponent implements OnInit {
  
  id:string;
  produit:Produit;
  
  constructor(private router:Router,private route:ActivatedRoute,private apiService:ApiService) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    console.log("identificateur:"+this.id);
    this.apiService.getDetailBySearch(this.id).subscribe((data:Produit)=>{
    console.log("hhhhhh"+JSON.stringify(data));
    this.produit=data;
    alert(JSON.stringify(this.produit));
  });

}
}