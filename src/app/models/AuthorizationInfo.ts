export class AuthorizationInfo {
  accessToken: string;
  refreshToken: string;

  constructor(accessToken: string, refreshToekn: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToekn;
  }
}
