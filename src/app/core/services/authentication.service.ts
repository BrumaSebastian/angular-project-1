import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private httpClient = inject(HttpClient);
  private responseType = "code";
  private scope = "openid offline_access profile email";
  private state = "random_string_for_csrf";

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

  exchangeAuthorizationCodeForToken(code: string): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
    });

    return this.httpClient.post(
      `https://localhost:7061/retrieve-token/?code=${code}`,
      { headers }
    );
  }
}
