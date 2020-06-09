import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login';
import { Search } from '../interfaces/search';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private baseUri: string = 'http://localhost:8888';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
        
  constructor(private http:HttpClient) { }

    registerUser(user:User):Observable<User> {
      return this.http.post<User>(this.baseUri + '/signup', user, this.httpOptions);
    }

    authentificate(login:Login){
      return this.http.post<Login>(
        this.baseUri + '/signin',login, this.httpOptions
        );
    }

    getAllProducts(){
      return this.http.get(this.baseUri+'/listproduits');
    }

    getProductsByChoice(choice:Search){
    return this.http.post(this.baseUri + '/listproduits/chercherparnom',choice, this.httpOptions);
    }

    getDetail(id:string){
      return this.http.get(this.baseUri + '/listproduits/'+id+' ');
    }
    getDetailBySearch(id:string){
      return this.http.get(this.baseUri + '/listproduits/chercherparnom/'+id+' ');
  }
//a la reception de iduser dans la partie serveur je dois le convertir au number !!!
  save_command(idUser:string,idProduit:string){
    return this.http.get(this.baseUri + '/ajouteraupanier/'+idUser+'/'+idProduit+' ');
  }
  
  getProductsByIdUser(idUser:string){
  return this.http.get(this.baseUri + '/cart/'+idUser+'');
  }

}