import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";




export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    
    if(req.url==='http://localhost:4005/auth/login' || req.url==='http://localhost:4005/auth/register'){
        return next(req)
    }


    const token = localStorage.getItem('token') as string
    const modifiedRequest=req.clone({headers:new HttpHeaders().append('token', token)})
    return next(modifiedRequest)
  }