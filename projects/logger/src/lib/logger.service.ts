import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, finalize, retryWhen, scan, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoggerService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const startTime = Date.now();
    let status: string;

    return next.handle(req).pipe(
      retryWhen((err) => err.pipe(
        scan((retryCount) => {
          if (retryCount < 3) {
            retryCount++;
            return retryCount;
          } else {
            throw err;
          }
        }, 1),
        delay(2000)
      )),
      tap(
        event => {
          status = '';
          if (event instanceof HttpResponse) {
            status = 'succeeded';
          }
        },
        () => status = 'failed'
      ),
      finalize(() => {
        const elapsedTime = Date.now() - startTime;
        const message = `${req.method} ${req.urlWithParams} ${status}
          in ${elapsedTime}ms`;

        this.log(message);
      })
    );
  }

  private log(data: string) {
    console.log(`%c${data}`, 'color:#2050a0;font-size:14px;font-weight:500');
  }

}
