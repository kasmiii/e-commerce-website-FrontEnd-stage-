import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Login } from '../interfaces/login';
import { User } from '../interfaces/user';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  login:Login;
  user:User;
  id:number;
  name:string;
  constructor(private apiService:ApiService,private auth:AuthService,private router:Router) { }

  onSignIn(form){

    this.login={
      username:form.username,
      password:form.password
              }
    console.log("Affichage du resulat du login");
    this.apiService.authentificate(this.login).subscribe((data:User) => {
      this.user=data;
      console.log("les informations du client sont: ",this.user,name);
      if(Object.keys(this.user).length === 0 && this.user.constructor === Object){
        console.log("login denied"); 
        this.auth.logout();
      }
      else {
        console.log("login successed");
        this.auth.login();
        localStorage.setItem('name',this.user.name);
        localStorage.setItem('idUser',this.user.id.toString());
        localStorage.setItem('login',this.login.username);
        /*console.log("les information du cient qui vient de se connecter ",this.user);
        console.log("le nom stocke dans le storage est : "+localStorage.getItem('name'));
        console.log("le id est: "+localStorage.getItem('idUser'));        
        */
        this.router.navigate(['/listproduits']);

      }
    });
    
  }

}
