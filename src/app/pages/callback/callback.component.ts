import { Component, inject } from "@angular/core";
import { AuthenticationService } from "../../core/services/authentication.service";
import { AuthorizationInfo } from "../../models/AuthorizationInfo";
import { ErrorMessage } from "../../models/ErrorMessage";
import { isPlatformBrowser } from "@angular/common";
import { PLATFORM_ID } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-callback",
  imports: [],
  templateUrl: "./callback.component.html",
  styleUrl: "./callback.component.scss",
})
export class CallbackComponent {
  private authenticationService = inject(AuthenticationService);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const urlParams = new URLSearchParams(window.location.search);
      const authorizationCode = urlParams.get("code");
      console.log(this.platformId);

      if (authorizationCode) {
        this.authenticationService
          .exchangeAuthorizationCodeForToken(authorizationCode)
          .subscribe({
            next: (response: AuthorizationInfo) => {
              console.log(response);
              this.authenticationService.setTokens(
                response.accessToken,
                response.refreshToken
              );
              console.log(this.authenticationService.getAccessToken());
              // console.log(this.authenticationService.getRefreshToken());
              this.router.navigate(["/dashboard"]);
            },
            error: (err: ErrorMessage) => {
              console.log(err);
            },
          });
      }
    }
  }
}
