import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;

  constructor(private formBuilder: FormBuilder) { 

    this.form = formBuilder.group({
      'correo': ['', Validators.required],
      'contrasena': ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submit(){
    if (this.form.valid) {
      console.table(this.form);
    } else {
      alert('DEBE LLENAR LOS CAMPOS');
    }
  }

}
