import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { LoginuserService } from 'src/app/service/loginuser.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User= new User();
  form:FormGroup;
  autenticacionService: any;
  constructor(private loginuserservice: LoginuserService, private formBuilder:FormBuilder, private ruta:Router) {
    this.form=this.formBuilder.group({
      user:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(2)]],
    })
  }

  ngOnInit(): void {
  }

  get User(){
    return this.form.get('user');
  }

  get Password(){
    return this.form.get('password');
  }

  userLogin(event:Event){
    console.log(this.user);
     this.loginuserservice.loginUser(this.user).subscribe(data=>{

         console.log("Data:" + JSON.stringify(this.user));
        this.ruta.navigate(['/vacs'])
       },error => alert("Por favor ingrese un usuario y contraseña correcto")
   );

  }
}
