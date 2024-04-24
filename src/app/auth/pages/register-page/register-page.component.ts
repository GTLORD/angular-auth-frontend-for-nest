import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  private fb = inject  ( FormBuilder );

  public registerForm: FormGroup = this.fb.group({

    name:    ['', [Validators  .required, ]],
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(12)]],

  });

  register(){
    console.log(this.registerForm.value);

  }
}
