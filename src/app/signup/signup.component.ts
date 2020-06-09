import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { User } from '../interfaces/user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  onCreate(form){

  const user:User= {
    id:0,
    name: form.name,
    adresse: form.adresse,
    telephone: form.phone,
    mail:form.email,
    username: form.username,
    password:form.password
  };

    this.apiService.registerUser(user).subscribe(data => {
    //console.log(data);
  });

}

}