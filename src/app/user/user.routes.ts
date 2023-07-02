import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { anonymousGuard } from '../guards/anonymous.guard';

export const userRoutes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent,
    canActivate: [anonymousGuard],
  },
];
