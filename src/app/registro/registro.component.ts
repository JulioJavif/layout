import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  createFormGroup(){
    return new FormGroup({
      nombre: new FormControl('', Validators.required),
      usuario: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.email),
      telefono: new FormControl('', Validators.minLength(5)),
      contrasena: new FormControl('', Validators.minLength(6)),
      contrasena2: new FormControl('', Validators.minLength(6)),
      tyc: new FormControl('', Validators.required), 
    });
  }

  registroForm;

  constructor() { 
    this.registroForm = this.createFormGroup();
    //console.log('constructor del registro');
  }

  ngOnInit(): void {
  }

  resetForm(){
    this.registroForm.reset();
    console.log('Reseteado!!!');
  }

  saveForm(){
    const registro = this.registroForm.value;
    //console.log('Datos Leídos');

    if(this.registroForm.valid){
      //console.log('Registro creado!!');
      console.table(registro);

      localStorage.setItem("registro", JSON.stringify(registro));

      alert('Registro creado para: '+registro.nombre);

      this.resetForm();
    }else{
      //console.log('Registro no creado!!');
      alert(
      'Hay campos vacíos o debe:'
      +'\n* Escribir correo válido.\n* Contraseña de mínimo 6 caracteres.'
      +'\n* Aceptar T&C');
    }
  }

}
