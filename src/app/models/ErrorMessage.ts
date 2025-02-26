export class ErrorMessage {
  error: string;
  errorDescription: string;

  constructor(error: string, errorDescription: string) {
    this.error = error;
    this.errorDescription = errorDescription;
  }
}
