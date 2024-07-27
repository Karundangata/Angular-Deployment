import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggingInterceptor } from './Interceptor/loggingInterceptor';
import { provideStore } from '@ngrx/store';
import { dummyReducer } from './State/Reducers/dummy.reducer';
import { counterReducer } from './State/Reducers/counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authReducer } from './State/Reducers/auth.reducer';
import { blogReducer } from './State/Reducers/blog.reducer';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './State/Effects/Auth.Effects';
import { BlogEffects } from './State/Effects/Blog.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideHttpClient(withInterceptors([loggingInterceptor])),
    provideStore({ 'dummy': dummyReducer, counter: counterReducer, auth: authReducer, blogs: blogReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), 
    provideEffects([AuthEffects, BlogEffects])]
};
