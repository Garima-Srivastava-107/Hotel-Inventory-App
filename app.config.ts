import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appConfig.service';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HoverDirective } from './hover.directive';
function initFactory(initService:InitService){
  return ()=>initService.init();
}
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    {
      provide:APP_SERVICE_CONFIG,
      useValue:APP_CONFIG,
    },
    provideHttpClient(),
    provideHttpClient(withInterceptors([requestInterceptor])),
    {
      provide:APP_INITIALIZER,
      useFactory:initFactory,
      deps:[InitService],
      multi:true,
    }, provideAnimationsAsync(),HoverDirective
  ]
};
