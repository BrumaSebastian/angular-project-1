import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private httpClient = inject(HttpClient);
  private responseType = 'code';
  private scope = 'openid offline_access profile email';
  private state = 'random_string_for_csrf';
  private isBrowser: boolean;

  readonly accessToken: string = 'accessToken';
  readonly refreshToken: string = 'refreshToken';

  constructor() {
    this.isBrowser = isPlatformBrowser(PLATFORM_ID);
  }

  redirectToAuthentication() {
    const authRedirectUrl =
      `${environment.authUri}?` +
      `client_id=${environment.clientId}&` +
      `response_type=${this.responseType}&` +
      `redirect_uri=${environment.redirectUri}&` +
      `scope=${this.scope}&` +
      `state=${this.state}`;

    window.location.href = authRedirectUrl;
  }

  redirectToLogout() {
    const logoutUrl = `${environment.logoutUri}?redirect_uri=http://localhost:4200/`;
    // this.removeTokens();
    // window.location.href = logoutUrl;

    this.httpClient
      .get(
        `http://localhost:9000/application/o/dev-authentication-app/end-session/?redirect_uri=http://localhost:4200/`,
        {}
      )
      .subscribe({
        next: (response: any) => {
          console.log(response);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  exchangeAuthorizationCodeForToken(code: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.httpClient.post(
      `${environment.dotnetBackEndUrl}${environment.dotnetBackEndRetrieveTokenEndpoint}?code=${code}`,
      { headers }
    );
  }

  setTokens(accessToken: string, refreshToken: string) {
    localStorage.setItem(this.accessToken, accessToken);
    localStorage.setItem(this.refreshToken, refreshToken);
  }

  removeTokens() {
    localStorage.removeItem(this.accessToken);
    localStorage.removeItem(this.refreshToken);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessToken);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshToken);
  }

  isLoggedIn(): boolean {
    return !!this.accessToken && !!this.refreshToken;
  }
}
