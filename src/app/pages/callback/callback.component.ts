import { Component, Inject, OnInit, inject } from "@angular/core";
import { AuthenticationService } from "../../core/services/authentication.service";
import { AuthorizationInfo } from "../../models/AuthorizationInfo";
import { ErrorMessage } from "../../models/ErrorMessage";
import { isPlatformBrowser } from "@angular/common";
import { PLATFORM_ID } from "@angular/core";

@Component({
  selector: "app-callback",
  imports: [],
  templateUrl: "./callback.component.html",
  styleUrl: "./callback.component.scss",
})
export class CallbackComponent {
  private authenticationService = inject(AuthenticationService);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const urlParams = new URLSearchParams(window.location.search);
      const authorizationCode = urlParams.get("code");
      console.log(this.platformId);

      // if (authorizationCode) {
      //   this.authenticationService
      //     .exchangeAuthorizationCodeForToken(authorizationCode)
      //     .subscribe({
      //       next: (response: AuthorizationInfo) => {
      //         console.log(response);
      //         // this.authTokenService.setTokens(
      //         //   response.accessToken,
      //         //   response.refreshToken
      //         // );
      //         // console.log(this.authTokenService.getAccessToken());
      //         // console.log(this.authTokenService.getRefreshToken());
      //         // this.router.navigate(['/dashboard']);
      //       },
      //       error: (err: ErrorMessage) => {
      //         console.log(err);
      //       },
      //     });
      // }
    }
  }
}
