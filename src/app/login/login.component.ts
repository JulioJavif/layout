import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login;

  createFormGroup(){
    return new FormGroup({
      usuario: new FormControl('', Validators.required),
      contrasena: new FormControl('', Validators.required),
      recordar: new FormControl('')
    });
  }

  constructor() {
     this.login = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  resetForm(){
    this.login.reset();
    console.log('reseteado!!');
  }

  logIn(){

    const datos = this.login.value;

    const esUsuario = datos.usuario === 'admin' && datos.contrasena === 'admin';

    if(this.login.valid && esUsuario){
      alert('Puede iniciar sesión');
    }else{
      alert('Datos incorrectos');
    }
  }
}
