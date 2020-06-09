import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.scss']
})
export class PayementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onPayement(form:NgForm){
console.log("bonjourrrrrrrrrrrrrrrr");
  }

}
