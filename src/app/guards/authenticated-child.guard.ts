import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

export const authenticatedChildGuard: CanActivateChildFn = () => {
  const loggedIn = inject(MsalService).instance.getActiveAccount() !== null;
  return loggedIn ? true : inject(Router).createUrlTree(['users/login']);
};
