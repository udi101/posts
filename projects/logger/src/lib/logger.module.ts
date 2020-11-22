import { NgModule } from '@angular/core';
import { LoggerComponent } from './logger.component';
import { httpInterceptorProviders } from './';


@NgModule({
  declarations: [LoggerComponent],
  imports: [
  ],
  exports: [LoggerComponent],
  providers: [httpInterceptorProviders]
})
export class LoggerModule { }

