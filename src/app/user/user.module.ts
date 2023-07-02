import { NgModule } from '@angular/core';
import { UserLoginComponent } from './user-login/user-login.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [UserLoginComponent],
})
export class UserModule {}
