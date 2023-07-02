import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

export const authenticatedGuard: CanActivateFn = () => {
  const loggedIn = inject(MsalService).instance.getActiveAccount() !== null;
  return loggedIn ? true : inject(Router).createUrlTree(['users/login']);
};
