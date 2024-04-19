import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Request Interceptorrrrr",req);
  const newReq=req.clone({headers:new HttpHeaders({token:'13134144dknkvndv'})});
  return next(newReq);
};
