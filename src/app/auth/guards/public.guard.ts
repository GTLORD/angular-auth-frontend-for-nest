import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

export const publicGuard: CanActivateFn = ( route, state) => {

  const url = state.url;

  // console.log( 'isAuthenticatedGuard')
  // console.log( {route, state})

  // console.log({url});
  // localStorage.setItem('url', url);
  const authService = inject( AuthService);
  const router      = inject( Router )

  //console.log({ status: authService.authStatus() });

  if ( authService.authStatus() === AuthStatus.authenticated){
      return true;
    }


    router.navigateByUrl('/auth/login')
  return false;

};
