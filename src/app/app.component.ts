import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  title = 'commerce';
  name:string;
  idUser:string;
  login:string;
  nbre_commandes:string;
constructor(){}

ngOnInit(){
  this.name=localStorage.getItem('name');
  this.idUser=localStorage.getItem('idUser');
  this.nbre_commandes=localStorage.getItem('nbre_commandes');
  this.login=localStorage.getItem('login');
  console.log(this.nbre_commandes);
  console.log(this.login);
}

}

