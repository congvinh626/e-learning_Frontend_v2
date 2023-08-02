import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class CustomErrorHandlerService extends ErrorHandler {

  constructor() {
    super();
  }

  override handleError(error: any) {
    // Here you can provide whatever logging you want
    // this.logger.logError(error);
    // super.handleError(error);
    window.location.href = '/';
  }
}
