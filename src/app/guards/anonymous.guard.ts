import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

export const anonymousGuard: CanActivateFn = () => {
  return inject(MsalService).instance.getActiveAccount() === null
    ? true
    : inject(Router).createUrlTree(['**']);
};
