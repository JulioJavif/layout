import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  createFormGroup(){
    return new FormGroup({
      correo: new FormControl(''),
      nombre: new FormControl(''),
      mensage: new FormControl('')
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
    console.log('Guardado!', contacto);

    if(contacto.nombre!='' && contacto.correo!='' && contacto.mensage!=''){
      alert('Datos guardados' + contacto);
    }else{
      alert('Debe llenar todos los campos!!!')
    }

  }
}
