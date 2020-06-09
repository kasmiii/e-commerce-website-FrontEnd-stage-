import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap,delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //isLoggedIn=false;
  redirectUrl: string;
  
  /*login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }*/
  
  login():void{
    localStorage.setItem('isLogedIn','true');  
  }

  logout(): void {
    localStorage.setItem('isLogedIn','false');
    localStorage.setItem('idUser','');
    localStorage.setItem('name','');  
  }
}