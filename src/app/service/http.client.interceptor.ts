import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AccountService} from './AccountService';
import {ToastrcustomService} from './toastrcustom';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
  check: boolean = false;
  constructor(private accountService: AccountService, private router: Router, private toast: ToastrcustomService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (!request.headers.has('Content-Type') && request.url.search('Upload') < 0 && request.url.search('Import') < 0) {
    //   request = request.clone({
    //     headers: request.headers.set('Content-Type', 'application/json'),
    //   });
    // }

    // const endTime = this.accountService.getTimeEndToken();

    // const d = new Date();
    // let timeNow = d.setTime(d.getTime());

    let authreq = request;
 
    
    // if (timeNow > endTime) {
    //   if (this.check == false) {
    //     authreq = this.AddTokenheader(request);
    //     setTimeout(() => {
    //       this.handleRefrehToken(request, next);
    //     }, 1000);
    //   }
    // } else {
      authreq = this.AddTokenheader(request);
    // }

    return next.handle(authreq).pipe(
      catchError((errordata) => {
        if (errordata.status === 401) {
          // this.handleRefrehToken(request, next);
          this.toast.showError('Có lỗi xảy ra, xin tải lại !!!');
        }
        return throwError(errordata);
      }),
    );
  }

  handleRefrehToken(request: HttpRequest<any>, next: HttpHandler) {
    this.check = true;
    const userInfo = this.accountService.getUserInfo();
    if (!userInfo?.token) {
      this.router.navigate(['/Home']);
    }
    let obj = {
      accessToken: userInfo.token,
      refreshToken: userInfo.refreshToken,
    };

    this.accountService.refreshToken(obj).subscribe((response) => {
      if (response.responseData.token) {
        this.accountService.SaveTokens(response.responseData);
        this.check = false;

        this.AddTokenheader(request);
      }
    }),
      catchError((errodata) => {
        return throwError(errodata);
      });
  }

  AddTokenheader(request: HttpRequest<any>) {
    const userInfo = this.accountService.getUserInfo();
    
    if (!userInfo) {
      return request;
    }
    this.check = false;
    return request.clone({setHeaders: {Authorization: 'Bearer ' + userInfo.token}});
  }
}
