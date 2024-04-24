

import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';
import { CanActivateFn, Router } from '@angular/router';

export const privateGuard: CanActivateFn = (route, state) => {

  const url = state.url;

  // console.log( 'isAuthenticatedGuard')
  // console.log( {route, state})

  // console.log({url});
  // localStorage.setItem('url', url);

  const authService = inject( AuthService);
  const router      = inject( Router )

  //console.log({ status: authService.authStatus() });

  if ( authService.authStatus() === AuthStatus.authenticated){
      router.navigateByUrl('/dashboard');
      return false;
    }

  return true;
};
