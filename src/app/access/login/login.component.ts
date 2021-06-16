import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Loginform= this.fl.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fl: FormBuilder) { }
  onSubmit() {
    if(this.Loginform.valid){
      console.log(this.Loginform.value);
    }else{
      alert("Email o contraseña no valido");
    }
  }

  ngOnInit(): void {
  }

}
