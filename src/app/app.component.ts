import { Component, Inject, OnInit } from '@angular/core';
import {
  MSAL_GUARD_CONFIG,
  MsalBroadcastService,
  MsalGuardConfiguration,
  MsalService,
} from '@azure/msal-angular';
import { InteractionStatus, InteractionType } from '@azure/msal-browser';
import { MenuItem } from 'primeng/api';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Shopping List';
  public loginDisplay = false;
  public items: MenuItem[] = [];
  private readonly _destroying$ = new Subject<void>();

  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private msalBroadcastService: MsalBroadcastService,
    private authService: MsalService
  ) {}
  ngOnInit(): void {
    this.loginDisplay = this.authService.instance.getActiveAccount() !== null;
    this.authService
      .initialize()
      .subscribe(() => this.authService.handleRedirectObservable());

    this.msalBroadcastService.inProgress$
      .pipe(
        filter(
          (status: InteractionStatus) => status === InteractionStatus.None
        ),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.loginDisplay =
          this.authService.instance.getActiveAccount() !== null;
      });
  }

  logout() {
    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      this.authService.instance.logoutPopup({
        postLogoutRedirectUri: '/',
        mainWindowRedirectUri: '/',
      });
    } else {
      this.authService.instance.logoutRedirect({
        postLogoutRedirectUri: '/',
      });
    }
  }
}
