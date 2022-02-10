import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  createFormGroup(){
    return new FormGroup({
      correo: new FormControl('', Validators.email),
      nombre: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required)
    });
  }

  formulario: FormGroup;

  constructor() { 
    this.formulario = this.createFormGroup();
    console.log('constructor');
  }

  ngOnInit(): void {
  }

  resetForm(){
    this.formulario.reset();
    console.log('Reseteado!');
  }

  saveForm(){

    const contacto = this.formulario.value;
    //console.log('Guardado!', contacto);

    if(this.formulario.valid){
      console.table(contacto);

      localStorage.setItem('mensaje', JSON.stringify(contacto));

      alert('Datos guardados');

      this.resetForm();
    }else{
      alert('Debe llenar todos los campos!!!\n\n* Revise si el correo está bien escrito.')
    }

  }
}
