import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private fb          = inject( FormBuilder);
  private authService = inject( AuthService );
  private router      = inject( Router );

  public myForm: FormGroup = this.fb.group({
    email:    ['jual@deres.mmm', [Validators.required, Validators.email]],
    password: ['123456pollito', [Validators.required, Validators.minLength(12)]],

  });

  login(){
    const { email, password } = this.myForm.value;

    this.authService.login(email, password)
    .subscribe( {
      next: () => this.router.navigateByUrl('/dashboard'),
      error: (message) => {
        Swal.fire('Error', message, 'error')

      }

    })



  }

}