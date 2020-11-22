import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggerService } from './logger.service';

export const httpInterceptorProviders = [
  { privide: HTTP_INTERCEPTORS, useClass: LoggerService, multi: true }
]
